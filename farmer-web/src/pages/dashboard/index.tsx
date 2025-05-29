import React from "react";
import {
    Row,
    Col,
    Card,
    Statistic,
    Typography,
    Divider,
    List,
    Progress,
    Badge,
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Column, Pie, Line } from "@ant-design/plots";

const { Title } = Typography;

const DashboardPage = () => {
    return (
        <div style={{ padding: 24 }}>
            <Title level={2}>Dashboard</Title>
            <Divider />

            {/* KPI Cards */}
            <Row gutter={[24, 24]}>
                {stats.map((stat) => (
                    <Col xs={24} sm={12} xl={8} key={stat.title}>
                        <Card bordered={false}>
                            <Statistic
                                title={stat.title}
                                value={stat.value}
                                prefix={
                                    stat.positiveChange ? (
                                        <ArrowUpOutlined
                                            style={{ color: "green" }}
                                        />
                                    ) : (
                                        <ArrowDownOutlined
                                            style={{ color: "red" }}
                                        />
                                    )
                                }
                                valueStyle={{
                                    color: stat.positiveChange
                                        ? "green"
                                        : "red",
                                }}
                                suffix={stat.suffix}
                            />
                            <small style={{ color: "#999" }}>
                                vs last month
                            </small>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Divider />

            <Row gutter={[24, 24]}>
                <Col xs={24} xl={16}>
                    <Card title="Monthly Business Performance" bordered={false}>
                        <Column {...columnConfig} />
                    </Card>
                </Col>
                <Col xs={24} xl={8}>
                    <Card
                        title="Product Category Distribution"
                        bordered={false}
                    >
                        <Pie {...pieConfig} />
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={[24, 24]}>
                <Col xs={24} xl={12}>
                    <Card title="Top Selling Produce (This Month)">
                        <List
                            dataSource={topSellingProduce}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.name}
                                        description={`${item.sold} units`}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col xs={24} xl={12}>
                    <Card title="Order Fulfillment Status">
                        <Pie {...orderStatusPieConfig} />
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Row gutter={[24, 24]}>
                <Col xs={24} xl={8}>
                    <Card title="Repeat Customer Rate">
                        <Statistic value={42} suffix="%" />
                        <small style={{ color: "#999" }}>
                            Based on last 3 months
                        </small>
                    </Card>
                </Col>
                <Col xs={24} xl={8}>
                    <Card title="Delivery Time Average">
                        <Statistic value={1.8} suffix="days" />
                    </Card>
                </Col>
                <Col xs={24} xl={8}>
                    <Card title="Revenue Goal Tracker">
                        <Progress percent={78} status="active" />
                        <div>Goal: Ksh 2,000,000</div>
                    </Card>
                </Col>
            </Row>

            <Divider />

            <Card title="Alerts & Notifications">
                <List
                    dataSource={alerts}
                    renderItem={(alert) => (
                        <List.Item>
                            <Badge status={alert.type} text={alert.message} />
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
};

export default DashboardPage;

const stats = [
    {
        title: "Average Order Volume",
        value: 208,
        suffix: "Ksh",
        positiveChange: true,
    },
    {
        title: "Transaction Count",
        value: 100,
        suffix: "",
        positiveChange: false,
    },
    { title: "Products Sold", value: 270, suffix: "", positiveChange: true },
    {
        title: "Gross Profit Margin",
        value: "69.10%",
        suffix: "",
        positiveChange: true,
    },
    {
        title: "Gross Profit",
        value: 26400,
        suffix: "Ksh",
        positiveChange: false,
    },
    {
        title: "Total Net Revenue",
        value: 1.8,
        suffix: "m Ksh",
        positiveChange: true,
    },
];

const columnConfig = {
    data: [
        { month: "Jan", value: 300, type: "Gross Sales Revenue" },
        { month: "Jan", value: 120, type: "Transaction Count" },
        { month: "Jan", value: 200, type: "Inventory Moved" },
        { month: "Feb", value: 320, type: "Gross Sales Revenue" },
        { month: "Feb", value: 140, type: "Transaction Count" },
        { month: "Feb", value: 210, type: "Inventory Moved" },
        { month: "Mar", value: 330, type: "Gross Sales Revenue" },
        { month: "Mar", value: 150, type: "Transaction Count" },
        { month: "Mar", value: 230, type: "Inventory Moved" },
        { month: "Apr", value: 300, type: "Gross Sales Revenue" },
        { month: "Apr", value: 100, type: "Transaction Count" },
        { month: "Apr", value: 220, type: "Inventory Moved" },
    ],
    xField: "month",
    yField: "value",
    seriesField: "type",
    isGroup: true,
    color: ["#1890ff", "#f5222d", "#faad14"],
    legend: { position: "top" },
    tooltip: { shared: true },
};

const pieConfig = {
    appendPadding: 10,
    data: [
        { category: "Vegetables", value: 40 },
        { category: "Fruits", value: 30 },
        { category: "Dairy", value: 15 },
        { category: "Grains", value: 15 },
    ],
    angleField: "value",
    colorField: "category",
    radius: 1,
    label: {
        type: "spider",
        labelHeight: 28,
        content: "{name}\n{percentage}",
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
};

const orderStatusPieConfig = {
    appendPadding: 10,
    data: [
        { status: "Delivered", value: 87 },
        { status: "Pending", value: 8 },
        { status: "Cancelled", value: 5 },
    ],
    angleField: "value",
    colorField: "status",
    radius: 1,
    label: {
        type: "spider",
        labelHeight: 28,
        content: "{name} {percentage}",
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
};

const topSellingProduce = [
    { name: "Tomatoes", sold: 120 },
    { name: "Kale", sold: 95 },
    { name: "Avocados", sold: 85 },
    { name: "Carrots", sold: 75 },
    { name: "Spinach", sold: 60 },
];

const alerts = [
    { type: "warning", message: "Low stock for Avocados" },
    { type: "error", message: "Delivery delay on Order #4562" },
    { type: "processing", message: "New customer message received" },
];
