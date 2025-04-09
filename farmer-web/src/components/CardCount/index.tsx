import { Card, Col, Row } from "antd";
import { Text } from "../Text";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Area, type AreaConfig } from "@ant-design/plots";

interface CardCountInterface {
    cardLabel: string;
    cardNumber: string | number;
    changePercentage: number;
    positiveChange: boolean;
    data: { index: number; value: number }[];
}

const CardCount: React.FC<CardCountInterface> = ({
    cardLabel,
    cardNumber,
    changePercentage,
    positiveChange,
    data,
}) => {
    const primaryColor = positiveChange ? "#52c41a" : "#ff4d4f";
    const secondaryColor = positiveChange ? "#d9f7be" : "#ffd6d6";

    const config: AreaConfig = {
        appendPadding: [1, 0, 0, 0],
        padding: 0,
        syncViewPadding: true,
        data: data,
        autoFit: true,
        tooltip: false,
        animation: false,
        xField: "index",
        yField: "value",
        xAxis: false,
        yAxis: {
            tickCount: 12,
            label: {
                style: {
                    fill: "transparent",
                },
            },
            grid: {
                line: {
                    style: {
                        stroke: "transparent",
                    },
                },
            },
        },
        smooth: true,
        areaStyle: () => {
            return {
                fill: `l(270) 0:#fff 0.2:${secondaryColor} 1:${primaryColor}`,
            };
        },
        line: {
            color: primaryColor,
        },
    };

    return (
        <Card style={{ padding: 0 }} size="small">
            <div
                style={{
                    gap: "24px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Text size="sm">{cardLabel}</Text>
                <Row>
                    <Col
                        span={12}
                        style={{
                            height: "80px",
                            flexDirection: "column",
                            display: "flex",
                            gap: "16px",
                        }}
                    >
                        <Text size="xxl" strong>
                            Ksh{cardNumber}
                        </Text>
                        <Text size="xs">
                            <span style={{ color: "red" }}>
                                <ArrowDownOutlined />
                                {changePercentage}
                            </span>{" "}
                            vs last month
                        </Text>
                    </Col>
                    <Col
                        span={12}
                        style={{
                            height: "80px",
                        }}
                    >
                        <Area {...config} />
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default CardCount;
