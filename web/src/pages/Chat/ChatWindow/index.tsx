import { Box, Typography, Avatar, IconButton, Skeleton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import Message from "../../../api/Message";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEcho } from "../../../lib/echo";
import { useEffect, useRef } from "react";
import Produce from "../../../api/Produce";

interface ChatWindowInterface {
    chatId: string | number;
    product_id: string | number | null;
}

const ChatWindow: React.FC<ChatWindowInterface> = ({ chatId, product_id }) => {
    const queryClient = useQueryClient();

    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const { data: userConversation, isLoading: loadingConversation } = useQuery(
        {
            queryKey: [`User Conversation ${chatId}`],
            queryFn: () => Message.getChatMessages(chatId),
        },
    );

    const { data: ProductChatData, isLoading: dataIsLoading } = useQuery({
        queryKey: [`Product chat ${product_id}`, product_id],
        queryFn: () => Produce.getProductDetails(`${product_id}`),
        enabled: !!product_id,
    });

    const farmer = userConversation?.farmer;

    const echo = useEcho();

    useEffect(() => {
        if (!echo) return;

        const channel = echo.private(`chat.${chatId}`);

        channel.listen(".MessageSent", (event: any) => {
            const newMessage = {
                ...event,
                is_me: false, // force incoming
            };

            queryClient.setQueryData<any>(
                [`User Conversation ${chatId}`],
                (old) => {
                    if (!old) return;
                    const lastMessage = old.messages[old.messages.length - 1];
                    if (lastMessage?.text === newMessage.text) {
                        return old; // Skip adding if content matches
                    }
                    return {
                        ...old,
                        messages: [...old.messages, newMessage],
                    };
                },
            );
        });

        return () => {
            channel.stopListening(".MessageSent");
        };
    }, [echo, chatId, queryClient]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "#ffffff",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderBottom: "1px solid #eee",
                }}
            >
                {loadingConversation ? (
                    <>
                        <Skeleton
                            variant="circular"
                            width={40}
                            height={40}
                            sx={{ mr: 2 }}
                        />
                        <Skeleton variant="text" width="40%" height={30} />
                    </>
                ) : (
                    <>
                        <Avatar
                            src={farmer?.avatar || undefined}
                            sx={{ mr: 2 }}
                        />
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            {farmer?.name || "Unknown Farmer"}
                        </Typography>
                    </>
                )}
                <IconButton>
                    <CallIcon />
                </IconButton>
            </Box>

            {/* Messages */}
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    px: 2,
                    py: 1,
                    backgroundColor: "#fafafa",
                }}
                ref={messagesContainerRef}
            >
                <MessagesList
                    messages={userConversation?.messages || []}
                    isLoading={loadingConversation}
                    scrollContainerRef={messagesContainerRef}
                />
            </Box>

            {/* Input */}
            <MessageInput
                productData={ProductChatData?.data}
                chatId={chatId}
                farmerId={farmer?.id ?? ""}
                loadingProduct={!!product_id && dataIsLoading}
            />
        </Box>
    );
};

export default ChatWindow;
