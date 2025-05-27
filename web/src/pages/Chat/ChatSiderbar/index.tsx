import {
    Box,
    List,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Skeleton,
    Stack,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import Message from "../../../api/Message";

const ChatSidebar: React.FC = () => {
    const { data: userChats, isLoading: loadingUserChats } = useQuery({
        queryKey: ["user Chats"],
        queryFn: () => Message.getUserChats(),
    });

    return (
        <Box>
            <List>
                {loadingUserChats
                    ? // Show skeletons
                      Array.from({ length: 5 }).map((_, i) => (
                          <ListItemButton
                              key={i}
                              sx={{ display: "flex", alignItems: "center" }}
                          >
                              <ListItemAvatar>
                                  <Skeleton
                                      variant="circular"
                                      width={40}
                                      height={40}
                                  />
                              </ListItemAvatar>
                              <ListItemText
                                  primary={<Skeleton width="60%" />}
                                  secondary={<Skeleton width="80%" />}
                              />
                          </ListItemButton>
                      ))
                    : userChats?.data.map((chat) => (
                          <Link
                              key={chat.id}
                              to="/chat/conversation/$id"
                              params={{ id: String(chat.id) }}
                              style={{
                                  textDecoration: "none",
                                  color: "inherit",
                              }}
                          >
                              <ListItemButton>
                                  <ListItemAvatar>
                                      <Avatar src={chat.vendor.avatar} />
                                  </ListItemAvatar>
                                  <ListItemText
                                      primary={chat.vendor.name}
                                      secondary={
                                          <Typography
                                              variant="body2"
                                              color="text.secondary"
                                              noWrap
                                          >
                                              {chat.latest_message?.text ??
                                                  "No messages yet"}
                                          </Typography>
                                      }
                                  />
                              </ListItemButton>
                          </Link>
                      ))}
            </List>
        </Box>
    );
};

export default ChatSidebar;
