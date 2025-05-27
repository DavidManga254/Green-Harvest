import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

interface Message {
    id: number;
    message: string;
    created_at: string;
    is_me: boolean;
    sender: {
        name: string;
        avatar: string | null;
    };
}

interface Props {
    messages: Message[];
    isLoading: boolean;
    scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

const MessagesList: React.FC<Props> = ({
    messages,
    isLoading,
    scrollContainerRef,
}) => {
    useEffect(() => {
        scrollContainerRef?.current?.scrollTo({
            top: scrollContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);

    if (isLoading) {
        return (
            <>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent:
                                index % 2 === 0 ? "flex-start" : "flex-end",
                            my: 1,
                        }}
                    >
                        <Skeleton
                            variant="rounded"
                            width="65%"
                            height={40}
                            sx={{ borderRadius: 2 }}
                        />
                    </Box>
                ))}
            </>
        );
    }

    return (
        <>
            {messages.map((msg) => (
                <MessageBubble
                    key={msg.id}
                    text={msg.message}
                    isSent={msg.is_me}
                    timestamp={new Date(msg.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    senderName={msg.sender.name}
                    avatar={msg.sender.avatar}
                />
            ))}
        </>
    );
};
export default MessagesList;

interface BubbleProps {
    text: string;
    isSent: boolean;
    timestamp: string;
    senderName?: string;
    avatar?: string | null;
}

const MessageBubble: React.FC<BubbleProps> = ({ text, isSent, timestamp }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isSent ? "flex-end" : "flex-start",
                my: 1,
            }}
        >
            <Box
                sx={{
                    bgcolor: isSent ? "green" : "#e0e0e0",
                    color: isSent ? "white" : "black",
                    px: 2,
                    py: 1,
                    borderRadius: 3,
                    maxWidth: "70%",
                }}
            >
                <Typography variant="body2">{text}</Typography>
                <Typography
                    variant="caption"
                    sx={{
                        display: "block",
                        mt: 0.5,
                        textAlign: isSent ? "right" : "left",
                        opacity: 0.7,
                    }}
                >
                    {timestamp}
                </Typography>
            </Box>
        </Box>
    );
};
