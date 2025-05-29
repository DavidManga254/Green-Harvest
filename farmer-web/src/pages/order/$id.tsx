import {
    Card,
    Descriptions,
    Typography,
    Divider,
    List,
    Steps,
    Space,
    Avatar,
} from "antd";
import { useShow } from "@refinedev/core";

const { Title, Text } = Typography;

const OrderShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    if (isLoading) return <div>Loading...</div>;

    const order = data?.data;
    const {
        id,
        status,
        total,
        subtotal,
        shipping,
        user,
        billing_address,
        items,
        statuses,
    } = order;

    return (
        <Card bordered style={{ margin: 24 }}>
            <Title level={3}>Order Details (ID: {id})</Title>

            <Divider orientation="left">Customer Info</Divider>
            <Descriptions bordered column={1} size="middle">
                <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
                <Descriptions.Item label="Email">
                    {user?.email}
                </Descriptions.Item>
                <Descriptions.Item label="Phone">
                    {user?.phone}
                </Descriptions.Item>
            </Descriptions>

            <Divider orientation="left">Billing Address</Divider>
            <Descriptions bordered column={1} size="middle">
                <Descriptions.Item label="Full Name">
                    {billing_address?.full_name}
                </Descriptions.Item>
                <Descriptions.Item label="Address">
                    {billing_address?.address_line_1},{" "}
                    {billing_address?.address_line_2}
                    <br />
                    {billing_address?.city}, {billing_address?.county},{" "}
                    {billing_address?.postal_code}
                    <br />
                    {billing_address?.country}
                </Descriptions.Item>
                <Descriptions.Item label="Phone">
                    {billing_address?.phone}
                </Descriptions.Item>
                <Descriptions.Item label="Notes">
                    {billing_address?.notes || "-"}
                </Descriptions.Item>
            </Descriptions>

            <Divider orientation="left">Order Items</Divider>
            <List
                itemLayout="horizontal"
                bordered
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    shape="square"
                                    src={item.produce?.images[0].image_path}
                                />
                            }
                            title={item.produce?.name}
                            description={`Quantity: ${item.quantity} | Price: Ksh ${item.price}`}
                        />
                    </List.Item>
                )}
            />

            <Divider orientation="left">Totals</Divider>
            <Descriptions column={1} bordered size="middle">
                <Descriptions.Item label="Subtotal">
                    Ksh {subtotal}
                </Descriptions.Item>
                <Descriptions.Item label="Shipping">
                    Ksh {shipping}
                </Descriptions.Item>
                <Descriptions.Item
                    label="Total"
                    labelStyle={{ fontWeight: "bold" }}
                >
                    <Text strong>Ksh {total}</Text>
                </Descriptions.Item>
            </Descriptions>

            <Divider orientation="left">Order Status History</Divider>
            <Steps
                direction="vertical"
                current={statuses.length - 1}
                size="small"
                items={statuses.map((s) => ({
                    title: s.status.replace(/_/g, " ").toUpperCase(),
                    description: new Date(s.created_at).toLocaleString(),
                }))}
            />
        </Card>
    );
};

export default OrderShow;
