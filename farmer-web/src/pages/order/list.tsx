import { useTable, List } from "@refinedev/antd";
import { useUpdate } from "@refinedev/core";
import { Table, Tag, Button, Space } from "antd";

const OrderList = () => {
    const { tableProps } = useTable({
        resource: "orders",
        pagination: { pageSize: 20 },
        onSearch: (values) => [
            {
                field: "user.name",
                operator: "contains",
                value: values.name,
            },
        ],
        sorters: {
            initial: [
                {
                    field: "created_at",
                    order: "desc",
                },
            ],
        },
        filters: {
            initial: [
                {
                    field: "status",
                    operator: "contains",
                    value: undefined,
                },
            ],
        },
        meta: {},
    });

    const { mutate: update } = useUpdate();

    const handleStatusUpdate = (id: number, status: string) => {
        update({
            resource: "orders",
            id,
            values: { status },
        });
    };

    return (
        <Table {...tableProps} rowKey="id">
            <Table.Column
                title="Order ID"
                dataIndex="id"
                render={(id) => <a href={`/orders/${id}`}>{id}</a>}
            />
            <Table.Column
                title="Customer"
                render={(_, record: any) => record?.user?.name ?? "N/A"}
            />
            <Table.Column title="Total (Ksh)" dataIndex="total" />
            <Table.Column
                title="Status"
                dataIndex="status"
                render={(status: string) => {
                    const color =
                        status === "pending"
                            ? "orange"
                            : status === "accepted"
                            ? "blue"
                            : status === "dispatched"
                            ? "green"
                            : "default";
                    return <Tag color={color}>{status?.toUpperCase()}</Tag>;
                }}
            />
            <Table.Column
                title="Actions"
                render={(_, record: any) => (
                    <Space>
                        {record.status === "pending" && (
                            <Button
                                type="primary"
                                onClick={() =>
                                    handleStatusUpdate(record.id, "accepted")
                                }
                            >
                                Accept
                            </Button>
                        )}
                        {record.status === "accepted" && (
                            <Button
                                onClick={() =>
                                    handleStatusUpdate(record.id, "dispatched")
                                }
                            >
                                Mark as Dispatched
                            </Button>
                        )}
                    </Space>
                )}
            />
        </Table>
    );
};

export default OrderList;
