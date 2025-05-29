import {
    Box,
    TextField,
    IconButton,
    Typography,
    Skeleton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Message from "../../../../api/Message";

interface Props {
    farmerId: number | string;
    chatId: number | string;
    productData?: {
        id: number;
        name: string;
        price_per_unit: string;
        images: { image_path: string }[];
    };
    loadingProduct?: boolean;
}

const MessageInput: React.FC<Props> = ({
    farmerId,
    chatId,
    productData,
    loadingProduct,
}) => {
    const [message, setMessage] = useState("");
    const queryClient = useQueryClient();
    const [activeProduct, setActiveProduct] = useState(productData);

    useEffect(() => {
        if (productData) {
            setActiveProduct(productData);
        }
    }, [productData]);

    const { mutate: sendMessage, isLoading: sending } = useMutation({
        mutationFn: (payload: { message: string; product_id?: number }) =>
            Message.sendMessage({
                vendor_id: farmerId,
                message: payload.message,
                product_id: payload.product_id,
            }),

        onMutate: async ({ message, product_id }) => {
            setMessage("");

            await queryClient.cancelQueries({
                queryKey: [`User Conversation ${chatId}`],
            });

            const previous = queryClient.getQueryData<any>([
                `User Conversation ${chatId}`,
            ]);

            const optimisticMessage = {
                id: Date.now(),
                message,
                created_at: new Date().toISOString(),
                is_me: true,
                sender: {
                    name: "You",
                    avatar: null,
                },
                ...(product_id && {
                    product: {
                        id: product_id,
                        name: activeProduct?.name,
                        price_per_unit: activeProduct?.price_per_unit,
                        image: activeProduct?.images?.[0]?.image_path,
                    },
                }),
            };

            queryClient.setQueryData<any>([`User Conversation ${chatId}`], {
                ...previous,
                messages: [...(previous?.messages || []), optimisticMessage],
            });

            setActiveProduct(undefined);
            return { previous };
        },

        onError: (err, _newMsg, context) => {
            if (context?.previous) {
                queryClient.setQueryData(
                    [`User Conversation ${chatId}`],
                    context.previous,
                );
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [`User Conversation ${chatId}`],
            });
            queryClient.invalidateQueries({ queryKey: ["user Chats"] });
        },
    });

    const handleSubmit = () => {
        const trimmed = message.trim();
        if (!trimmed) return;
        sendMessage({
            message: trimmed,
            product_id: activeProduct?.id,
        });
    };

    return (
        <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
            {loadingProduct ? (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        p: 1.5,
                        backgroundColor: "#f0f0f0",
                        borderRadius: 2,
                        border: "1px solid #ddd",
                    }}
                >
                    <Skeleton
                        variant="rectangular"
                        width={48}
                        height={48}
                        sx={{ borderRadius: 1.5, mr: 2 }}
                    />
                    <Box sx={{ flex: 1 }}>
                        <Skeleton width="80%" height={18} />
                        <Skeleton width="50%" height={16} />
                    </Box>
                </Box>
            ) : activeProduct?.id ? (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        p: 1.5,
                        backgroundColor: "#f8f9fa",
                        borderRadius: 2,
                        border: "1px solid #ddd",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                    }}
                >
                    <Box
                        component="img"
                        src={
                            activeProduct?.images?.[0]?.image_path ??
                            "/placeholder.png"
                        }
                        alt={activeProduct?.name ?? "Product"}
                        sx={{
                            width: 48,
                            height: 48,
                            objectFit: "cover",
                            borderRadius: 1.5,
                            mr: 2,
                        }}
                    />
                    <Box sx={{ overflow: "hidden" }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 600,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {activeProduct?.name ?? "Unnamed Product"}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                        >
                            Ksh{" "}
                            {Number(activeProduct?.price_per_unit ?? 0).toFixed(
                                2,
                            )}
                        </Typography>
                    </Box>
                </Box>
            ) : null}

            <Box sx={{ display: "flex" }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type a message..."
                    size="small"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    sx={{
                        mr: 2,
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "green",
                            },
                        },
                    }}
                />
                <IconButton
                    color="success"
                    onClick={handleSubmit}
                    disabled={!message.trim() || sending}
                >
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default MessageInput;
