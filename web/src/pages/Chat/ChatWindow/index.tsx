import { Box, Typography, Avatar, IconButton, Skeleton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import Message from "../../../api/Message";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEcho } from "../../../lib/echo";
import { useEffect, useRef } from "react";

interface ChatWindowInterface {
    chatId: string | number;
}

const ChatWindow: React.FC<ChatWindowInterface> = ({ chatId }) => {
    const queryClient = useQueryClient();

    const messagesContainerRef = useRef<HTMLDivElement>(null);

    const { data: userConversation, isLoading: loadingConversation } = useQuery(
        {
            queryKey: [`User Conversation ${chatId}`],
            queryFn: () => Message.getChatMessages(chatId),
        },
    );

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
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
                    <VideocamIcon />
                </IconButton>
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
            >
                <MessagesList
                    messages={userConversation?.messages || []}
                    isLoading={loadingConversation}
                    scrollContainerRef={messagesContainerRef}
                />
            </Box>

            {/* Input */}
            <MessageInput chatId={chatId} farmerId={farmer?.id ?? ""} />
        </Box>
    );
};

export default ChatWindow;
