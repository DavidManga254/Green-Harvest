import { useShow } from "@refinedev/core";
import {
    Card,
    Descriptions,
    Typography,
    Image,
    Tag,
    Space,
    Divider,
    Skeleton,
} from "antd";
import { useDelete, useNavigation } from "@refinedev/core";
import { Button, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const SubscriptionShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const plan = data?.data;

    const { mutate: deletePlan, isLoading: deleting } = useDelete();
    const { push } = useNavigation();

    const handleDelete = () => {
        deletePlan(
            {
                resource: "subscriptions",
                id: plan.id,
            },
            {
                onSuccess: () => {
                    message.success("Subscription plan deleted.");
                    push("/subscriptions");
                },
                onError: () => {
                    message.error("Failed to delete subscription.");
                },
            }
        );
    };

    if (isLoading || !plan) {
        return <Skeleton active paragraph={{ rows: 6 }} />;
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 16,
                }}
            >
                <Popconfirm
                    title="Are you sure you want to delete this subscription?"
                    onConfirm={handleDelete}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        loading={deleting}
                    >
                        Delete Plan
                    </Button>
                </Popconfirm>
            </div>

            <Card
                title={<Title level={3}>Subscription Plan #{plan.id}</Title>}
                bordered
                style={{ maxWidth: 900, margin: "auto" }}
            >
                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                >
                    {/* Cover Image */}
                    {plan.cover_image && (
                        <Image
                            src={plan.cover_image}
                            alt="Subscription Cover"
                            width="100%"
                            height={260}
                            style={{ objectFit: "cover", borderRadius: 8 }}
                            preview
                        />
                    )}

                    {/* Details Section */}
                    <Descriptions
                        bordered
                        column={1}
                        size="middle"
                        labelStyle={{ width: 200 }}
                    >
                        <Descriptions.Item label="Template ID">
                            {plan.subscription_plan_template_id ?? (
                                <Tag color="gold">Custom Plan</Tag>
                            )}
                        </Descriptions.Item>

                        <Descriptions.Item label="Produce ID">
                            {plan.produce_id ?? (
                                <Text type="secondary">Not linked</Text>
                            )}
                        </Descriptions.Item>

                        <Descriptions.Item label="Status">
                            <Tag color={plan.is_active ? "green" : "red"}>
                                {plan.is_active ? "Active" : "Inactive"}
                            </Tag>
                        </Descriptions.Item>

                        <Descriptions.Item label="Created At">
                            {new Date(plan.created_at).toLocaleString()}
                        </Descriptions.Item>

                        <Descriptions.Item label="Last Updated">
                            {new Date(plan.updated_at).toLocaleString()}
                        </Descriptions.Item>
                    </Descriptions>

                    <Divider />

                    {/* Optional Nested Items */}
                    {Array.isArray(plan.items) && plan.items.length > 0 && (
                        <>
                            <Title level={4}>Included Items</Title>
                            <ul style={{ paddingLeft: 24, listStyle: "none" }}>
                                {plan.items.map((item: any) => (
                                    <li
                                        key={item.id}
                                        style={{
                                            marginBottom: 16,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                        }}
                                    >
                                        {item.images && (
                                            <img
                                                src={item.images[0].image_path}
                                                alt={item.name}
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    objectFit: "cover",
                                                    borderRadius: 6,
                                                    border: "1px solid #f0f0f0",
                                                }}
                                            />
                                        )}
                                        <Text style={{ fontWeight: 500 }}>
                                            {item.name || `Item #${item.id}`}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </Space>
            </Card>
        </>
    );
};
