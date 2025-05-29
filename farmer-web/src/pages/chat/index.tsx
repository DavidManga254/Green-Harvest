import { useList } from "@refinedev/core";
import { List } from "@refinedev/antd";
import {
    Avatar,
    Typography,
    Skeleton,
    Row,
    Col,
    Divider,
    Card,
    Empty,
} from "antd";
// import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./index.css";
import { useQuery } from "@tanstack/react-query";
import { ChatApi } from "../../api/chat";

dayjs.extend(relativeTime);
const { Text } = Typography;

const ChatListPage: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["chats", "farmer"],
        queryFn: ChatApi.getChatsForFarmer,
    });

    const chats = data || [];

    return (
        <div className="chat-wrapper">
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
                Chats
            </Typography.Title>

            {isLoading ? (
                Array(4)
                    .fill(0)
                    .map((_, idx) => (
                        <Card key={idx} className="chat-card-skeleton">
                            <Skeleton.Avatar active size="large" />
                            <Skeleton
                                active
                                paragraph={{ rows: 1 }}
                                title={false}
                                style={{ marginLeft: 16, flex: 1 }}
                            />
                        </Card>
                    ))
            ) : chats.length === 0 ? (
                <Empty description="No chats yet" style={{ marginTop: 100 }} />
            ) : (
                chats.map((chat) => (
                    <a
                        href={`/chat/${chat.id}`}
                        key={chat.id}
                        className="chat-card"
                    >
                        <Avatar
                            src={chat.customer?.avatar || "/placeholder.png"}
                            size={48}
                        />
                        <div className="chat-info">
                            <Row justify="space-between" align="middle">
                                <Col>
                                    <Text strong className="chat-name">
                                        {chat.customer?.name}
                                    </Text>
                                </Col>
                                <Col>
                                    <Text
                                        type="secondary"
                                        className="chat-time"
                                    >
                                        {chat.latest_message?.sent_at
                                            ? dayjs(
                                                  chat.latest_message?.sent_at
                                              ).fromNow()
                                            : ""}
                                    </Text>
                                </Col>
                            </Row>
                            <Text
                                type="secondary"
                                className="chat-preview"
                                ellipsis
                            >
                                {chat.latest_message?.text || "No messages yet"}
                            </Text>
                        </div>
                    </a>
                ))
            )}
        </div>
    );
};

export default ChatListPage;
