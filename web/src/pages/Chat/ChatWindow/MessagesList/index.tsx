import { Box, Skeleton, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";

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
                    product={msg.product_detail}
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
    product?: {
        id: number;
        name: string;
        price_per_unit: string;
        image?: string;
    };
}

const MessageBubble: React.FC<BubbleProps> = ({
    text,
    isSent,
    timestamp,
    product,
}) => {
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
                {/* Product preview if exists */}
                {product && (
                    <Box
                        sx={{
                            mb: 1,
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: isSent ? "#2e7d32" : "#f0f0f0",
                            color: isSent ? "white" : "black",
                        }}
                    >
                        <Link
                            to="/product/$productId"
                            params={{ productId: product.id }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                {product.image && (
                                    <Box
                                        component="img"
                                        src={product.image}
                                        alt={product.name}
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 1,
                                            mr: 1.5,
                                            objectFit: "cover",
                                        }}
                                    />
                                )}
                                <Box>
                                    <Typography
                                        fontWeight={600}
                                        variant="body2"
                                        noWrap
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography variant="caption">
                                        Ksh{" "}
                                        {Number(product.price_per_unit).toFixed(
                                            2,
                                        )}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                )}

                {/* Actual message text */}
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
