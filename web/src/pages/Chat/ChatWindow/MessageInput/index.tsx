import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Message from "../../../../api/Message";

interface Props {
    farmerId: number | string;
    chatId: number | string;
}

const MessageInput: React.FC<Props> = ({ farmerId, chatId }) => {
    const [message, setMessage] = useState("");
    const queryClient = useQueryClient();

    const { mutate: sendMessage, isLoading: sending } = useMutation({
        mutationFn: (trimmedMessage: string) =>
            Message.sendMessage({
                vendor_id: farmerId,
                message: trimmedMessage,
            }),

        onMutate: async (trimmedMessage: string) => {
            setMessage(""); // Clear input

            await queryClient.cancelQueries({
                queryKey: [`User Conversation ${chatId}`],
            });

            const previous = queryClient.getQueryData<any>([
                `User Conversation ${chatId}`,
            ]);

            const optimisticMessage = {
                id: Date.now(),
                message: trimmedMessage,
                created_at: new Date().toISOString(),
                is_me: true,
                sender: {
                    name: "You",
                    avatar: null,
                },
            };

            queryClient.setQueryData<any>([`User Conversation ${chatId}`], {
                ...previous,
                messages: [...(previous?.messages || []), optimisticMessage],
            });

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
        sendMessage(trimmed); // pass trimmed value directly
    };

    return (
        <Box sx={{ p: 2, borderTop: "1px solid #eee", display: "flex" }}>
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
    );
};

export default MessageInput;
