import { Col, Row } from "antd";
import CardCount from "../../components/CardCount";
import React from "react";
import { Column } from "@ant-design/plots";

const DashboardPage = () => {
    return (
        <div>
            <Row gutter={[32, 32]}>
                <CardColumn>
                    <CardCount
                        cardLabel="Average Order Volume"
                        cardNumber={208}
                        changePercentage={12}
                        positiveChange={true}
                        data={[
                            { index: 0, value: 80 },
                            { index: 1, value: 100 },
                            { index: 2, value: 120 },
                            { index: 3, value: 110 },
                            { index: 4, value: 208 },
                        ]}
                    />
                </CardColumn>
                <CardColumn>
                    <CardCount
                        cardLabel="Transaction Count (Orders)"
                        cardNumber={100}
                        changePercentage={2}
                        positiveChange={false}
                        data={[
                            { index: 0, value: 110 },
                            { index: 1, value: 90 },
                            { index: 2, value: 80 },
                            { index: 3, value: 100 },
                            { index: 4, value: 100 },
                        ]}
                    />
                </CardColumn>
                <CardColumn>
                    <CardCount
                        cardLabel="Products Sold"
                        cardNumber={270}
                        changePercentage={2}
                        positiveChange={true}
                        data={[
                            { index: 0, value: 200 },
                            { index: 1, value: 220 },
                            { index: 2, value: 230 },
                            { index: 3, value: 250 },
                            { index: 4, value: 270 },
                        ]}
                    />
                </CardColumn>
                <CardColumn>
                    <CardCount
                        cardLabel="Gross Profit Margin"
                        cardNumber="69.10%"
                        changePercentage={12}
                        positiveChange={true}
                        data={[
                            { index: 0, value: 50 },
                            { index: 1, value: 55 },
                            { index: 2, value: 60 },
                            { index: 3, value: 65 },
                            { index: 4, value: 69 },
                        ]}
                    />
                </CardColumn>
                <CardColumn>
                    <CardCount
                        cardLabel="Gross Profit"
                        cardNumber={26400}
                        changePercentage={2}
                        positiveChange={false}
                        data={[
                            { index: 0, value: 30000 },
                            { index: 1, value: 29000 },
                            { index: 2, value: 28000 },
                            { index: 3, value: 27000 },
                            { index: 4, value: 26400 },
                        ]}
                    />
                </CardColumn>
                <CardColumn>
                    <CardCount
                        cardLabel="Total Net Revenue"
                        cardNumber={"1.8m"}
                        changePercentage={2}
                        positiveChange={true}
                        data={[
                            { index: 0, value: 1.2 },
                            { index: 1, value: 1.4 },
                            { index: 2, value: 1.5 },
                            { index: 3, value: 1.6 },
                            { index: 4, value: 1.8 },
                        ]}
                    />
                </CardColumn>
            </Row>
            <div>
                <MonthlySalesInventoryChart />
            </div>
        </div>
    );
};

export default DashboardPage;

interface CardColumnInterface {
    children: React.ReactNode;
}
const CardColumn: React.FC<CardColumnInterface> = ({ children }) => (
    <Col xs={24} sm={12} xl={8}>
        {children}
    </Col>
);

const MonthlySalesInventoryChart = () => {
    const data = [
        { month: "Jan", value: 300, category: "Gross Sales Revenue" },
        { month: "Jan", value: 120, category: "Transaction Count" },
        { month: "Jan", value: 200, category: "Inventory Moved" },

        { month: "Feb", value: 320, category: "Gross Sales Revenue" },
        { month: "Feb", value: 140, category: "Transaction Count" },
        { month: "Feb", value: 210, category: "Inventory Moved" },

        { month: "Mar", value: 330, category: "Gross Sales Revenue" },
        { month: "Mar", value: 150, category: "Transaction Count" },
        { month: "Mar", value: 230, category: "Inventory Moved" },

        { month: "Apr", value: 300, category: "Gross Sales Revenue" },
        { month: "Apr", value: 100, category: "Transaction Count" },
        { month: "Apr", value: 220, category: "Inventory Moved" },

        // ...more months up to Mar 2024
    ];

    const config = {
        data,
        xField: "month",
        yField: "value",
        seriesField: "type",
        isStack: true,
        label: false,
        tooltip: {
            shared: true,
        },
        legend: {
            position: "top",
        },
        color: ({ type }) => {
            switch (type) {
                case "Gross Sales Revenue":
                    return "#1890ff"; // blue
                case "Transaction Count":
                    return "#ff4d4f"; // red
                case "Inventory Moved":
                    return "#fadb14"; // orange/yellow
                default:
                    return "#d9d9d9";
            }
        },
    };

    return <Column {...config} />;
};
