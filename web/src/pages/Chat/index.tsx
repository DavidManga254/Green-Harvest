import { Box, Paper } from "@mui/material";
import ChatWindow from "./ChatWindow";
import ChatSidebar from "./ChatSiderbar";

const ChatApp: React.FC = () => {
    return (
        <Box sx={{ display: "flex", height: "90vh", width: "100%" }}>
            <Paper
                sx={{ width: 300, borderRight: "1px solid #eee" }}
                elevation={1}
            >
                <ChatSidebar />
            </Paper>
            <Box sx={{ flexGrow: 1 }}>
                <ChatWindow />
            </Box>
        </Box>
    );
};

export default ChatApp;
