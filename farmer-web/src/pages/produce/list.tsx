import { SearchOutlined } from "@ant-design/icons";
import {
    CreateButton,
    DeleteButton,
    EditButton,
    FilterDropdown,
    List,
    useTable,
} from "@refinedev/antd";
import { getDefaultFilter, useGo } from "@refinedev/core";
import { Input, Space, Table } from "antd";
import { CustomAvatar } from "../../components/custom-avatar";
import { Text } from "../../components/Text";

interface ProducePageInterface {
    children: React.ReactNode;
}

const ProducePage: React.FC<ProducePageInterface> = ({ children }) => {
    const go = useGo();

    const { tableProps, filters } = useTable({
        resource: "produce",
        pagination: {
            pageSize: 20,
        },
        onSearch: (values) => {
            return [
                {
                    field: "name",
                    operator: "contains",
                    value: values.name,
                },
            ];
        },
        sorters: {
            initial: [
                {
                    field: "created_at",
                    order: "desc",
                },
            ],
        },
        meta: {},
        filters: {
            initial: [
                {
                    field: "name",
                    operator: "contains",
                    value: undefined,
                },
            ],
        },
    });

    return (
        <div className="produce-page">
            <List
                breadcrumb={false}
                headerButtons={() => (
                    <CreateButton
                        onClick={() =>
                            go({
                                to: {
                                    resource: "produce",
                                    action: "create",
                                },
                            })
                        }
                    />
                )}
            >
                <Table
                    {...tableProps}
                    pagination={{ ...tableProps.pagination }}
                >
                    <Table.Column
                        dataIndex={"name"}
                        title={"Product Name"}
                        defaultFilteredValue={getDefaultFilter("id", filters)}
                        filterIcon={<SearchOutlined />}
                        filterDropdown={(props) => (
                            <FilterDropdown {...props}>
                                <Input placeholder="search product" />
                            </FilterDropdown>
                        )}
                        render={(value, record) => (
                            <Space>
                                <CustomAvatar
                                    shape="square"
                                    name={record.name}
                                    src={record.images[0].image_path}
                                />
                                <Text style={{ whiteSpace: "nowrap" }}>
                                    {record.name}
                                </Text>
                            </Space>
                        )}
                    />
                    <Table.Column
                        dataIndex={"productId"}
                        title={"Product ID"}
                        render={(value, record) => (
                            <Space>
                                <Text style={{ whiteSpace: "nowrap" }}>
                                    {record.id}
                                </Text>
                            </Space>
                        )}
                    />
                    <Table.Column
                        dataIndex={"category"}
                        title={"Category"}
                        render={(value, record) => (
                            <Space>
                                <Text style={{ whiteSpace: "nowrap" }}>
                                    {record.category.name}
                                </Text>
                            </Space>
                        )}
                    />
                    <Table.Column
                        dataIndex={"productPrice"}
                        title={"Price"}
                        render={(value, record) => (
                            <Space>
                                <Text style={{ whiteSpace: "nowrap" }}>
                                    {record.price_per_unit}
                                </Text>
                            </Space>
                        )}
                    />
                    <Table.Column
                        dataIndex={"stockLevel"}
                        title={"Stock Level"}
                        render={(value, record) => (
                            <Space>
                                <Text style={{ whiteSpace: "nowrap" }}>
                                    {record.quantity}
                                </Text>
                            </Space>
                        )}
                    />
                    <Table.Column
                        dataIndex={"id"}
                        title={"Actions"}
                        fixed={"right"}
                        render={(value) => (
                            <Space>
                                <EditButton
                                    hideText
                                    size="small"
                                    recordItemId={value}
                                />
                                <DeleteButton
                                    hideText
                                    size="small"
                                    recordItemId={value}
                                />
                            </Space>
                        )}
                    />

                    <Table.Column />
                </Table>
            </List>
            {children}
        </div>
    );
};

export default ProducePage;
