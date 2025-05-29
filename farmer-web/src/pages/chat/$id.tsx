import {
    Avatar,
    Button,
    Card,
    Col,
    Input,
    Row,
    Spin,
    Typography,
    message as antdMessage,
} from "antd";
import { useParsed } from "@refinedev/core";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChatApi } from "../../api/chat";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SendOutlined } from "@ant-design/icons";
import { useEcho } from "../../lib/echo";

dayjs.extend(relativeTime);
const { Text } = Typography;
const { TextArea } = Input;

const ChatConversationPage: React.FC = () => {
    const {
        params: { id: chatId },
    } = useParsed();

    const queryClient = useQueryClient();
    const messageEndRef = useRef<HTMLDivElement>(null);
    const [messageText, setMessageText] = useState("");

    const { data, isLoading } = useQuery({
        queryKey: ["chat", chatId],
        queryFn: () => ChatApi.getChatMessages(chatId!),
    });

    const messages = data?.messages || [];
    const user = data?.user || {};
    const farmer = data?.farmer;

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const mutation = useMutation({
        mutationFn: ChatApi.sendFarmerMessage,
        // Optimistic update
        onMutate: async (newMessageWithFarmer) => {
            await queryClient.cancelQueries(["chat", chatId]);

            const previousData = queryClient.getQueryData(["chat", chatId]);

            const optimisticMessage = {
                id: `temp-${Date.now()}`,
                message: newMessageWithFarmer.message,
                created_at: new Date().toISOString(),
                sender: {
                    id: newMessageWithFarmer.farmer.id,
                    name: newMessageWithFarmer.farmer.name,
                    avatar: newMessageWithFarmer.farmer.avatar,
                },
                is_me: true,
                product: null,
                product_detail: null,
                farmer_id: newMessageWithFarmer.farmer.id,
            };

            queryClient.setQueryData(["chat", chatId], (old: any) => ({
                ...old,
                messages: [...(old?.messages || []), optimisticMessage],
            }));

            return { previousData };
        },

        onSuccess: () => {
            queryClient.invalidateQueries(["chat", chatId]); // Refresh with actual DB message
        },
        onError: (_error, _variables, context) => {
            antdMessage.error("Failed to send message");
            if (context?.previousData) {
                queryClient.setQueryData(
                    ["chat", chatId],
                    context.previousData
                ); // Rollback
            }
        },
    });

    const handleSend = () => {
        if (!messageText.trim()) return;

        if (!farmer) {
            antdMessage.warning("Farmer profile not available");
            return;
        }

        const customerId = data?.messages?.find((m) => !m.is_me && m.sender?.id)
            ?.sender?.id;

        if (!customerId) {
            antdMessage.warning("No customer ID found");
            return;
        }

        mutation.mutate({
            customer_id: customerId,
            message: messageText.trim(),
            farmer,
        });

        setMessageText(""); // ✅ move this here to ensure it's executed
    };

    const echo = useEcho();

    useEffect(() => {
        if (!echo || !chatId) return;

        const channel = echo.private(`chat.${chatId}`);

        const listener = (newMessage: any) => {
            const receivedMessage = {
                ...newMessage,
                is_me: false, // explicitly mark as received
            };

            queryClient.setQueryData(["chat", chatId], (old: any) => {
                const existing = old?.messages || [];

                const lastMessage = existing[existing.length - 1];

                // Check for exact match in message content, sender, and timestamp proximity (optional)
                const isDuplicate =
                    lastMessage &&
                    lastMessage.message === receivedMessage.message &&
                    lastMessage.sender?.id === receivedMessage.sender?.id;

                if (isDuplicate) return old;

                return {
                    ...old,
                    messages: [...existing, receivedMessage],
                };
            });
        };

        channel.listen(".MessageSent", listener);

        return () => {
            channel.stopListening(".MessageSent", listener);
        };
    }, [echo, chatId, queryClient]);

    if (isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Spin tip="Loading chat..." size="large" />
            </div>
        );
    }

    return (
        <Card
            title={
                <Row align="middle" gutter={16}>
                    <Col>
                        <Avatar size={40} src={user.avatar} />
                    </Col>
                    <Col>
                        <Typography.Title level={5} style={{ margin: 0 }}>
                            {user.name}
                        </Typography.Title>
                    </Col>
                </Row>
            }
            bodyStyle={{
                padding: 0,
                height: "80vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Message List */}
            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "16px",
                    background: "#f9f9f9",
                }}
            >
                {messages.map((msg) => {
                    const isMe = msg.is_me;
                    return (
                        <div
                            key={msg.id}
                            style={{
                                display: "flex",
                                justifyContent: isMe
                                    ? "flex-end"
                                    : "flex-start",
                                marginBottom: 12,
                            }}
                        >
                            <div
                                style={{
                                    maxWidth: "65%",
                                    background: isMe ? "#e6fffb" : "#ffffff",
                                    padding: "12px 16px",
                                    borderRadius: 12,
                                    border: isMe
                                        ? "1px solid #87e8de"
                                        : "1px solid #f0f0f0",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                                }}
                            >
                                {msg.product_detail && (
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: 8,
                                            gap: 10,
                                        }}
                                    >
                                        <img
                                            src={msg.product_detail.image}
                                            alt="product"
                                            width={48}
                                            height={48}
                                            style={{
                                                borderRadius: 4,
                                                objectFit: "cover",
                                            }}
                                        />
                                        <div>
                                            <Text strong>
                                                {msg.product_detail.name}
                                            </Text>
                                            <br />
                                            <Text type="secondary">
                                                KES{" "}
                                                {
                                                    msg.product_detail
                                                        .price_per_unit
                                                }
                                            </Text>
                                        </div>
                                    </div>
                                )}
                                <Text>{msg.message}</Text>
                                <div
                                    style={{
                                        textAlign: "right",
                                        marginTop: 6,
                                    }}
                                >
                                    <Text
                                        type="secondary"
                                        style={{ fontSize: 11 }}
                                    >
                                        {dayjs(msg.created_at).fromNow()}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div ref={messageEndRef} />
            </div>

            {/* Input */}
            <div
                style={{
                    borderTop: "1px solid #f0f0f0",
                    padding: 16,
                    background: "#fff",
                }}
            >
                <Row gutter={8}>
                    <Col flex="auto">
                        <TextArea
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            autoSize={{ minRows: 1, maxRows: 3 }}
                            placeholder="Type a message..."
                            onPressEnter={(e) => {
                                if (!e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        />
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            icon={<SendOutlined />}
                            onClick={handleSend}
                            loading={mutation.isLoading}
                        >
                            Send
                        </Button>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default ChatConversationPage;
