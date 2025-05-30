import { Box, Paper } from "@mui/material";
import ChatWindow from "./ChatWindow";
import ChatSidebar from "./ChatSiderbar";

const ChatApp: React.FC = () => {
    return (
        <Box sx={{ display: "flex", height: "90vh", width: "100%" }}>
            <Paper
                sx={{
                    width: 300,
                    borderRight: "1px solid #eee",
                    backgroundColor: "#f4f4f4", // light gray for sidebar
                    boxShadow: "2px 0 5px rgba(0,0,0,0.05)", // subtle shadow
                }}
                elevation={0}
            >
                <ChatSidebar />
            </Paper>
            <Box sx={{ flexGrow: 1, borderLeft: "1px solid #ddd" }}>
                <ChatWindow />
            </Box>
        </Box>
    );
};

export default ChatApp;
