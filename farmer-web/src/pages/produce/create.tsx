import { Form, Input, Modal } from "antd";
import ProducePage from "./list";
import { useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ProduceCreatePage: React.FC = () => {
    const go = useGo();

    const goToProducePage = () => {
        go({
            to: { resource: "produce", action: "list" },
            options: { keepQuery: true },
            type: "replace",
        });
    };

    const { formProps, modalProps } = useModalForm({
        action: "create",
        defaultVisible: true,
        resource: "produce",
        redirect: false,
        mutationMode: "pessimistic",
        onMutationSuccess: goToProducePage,
        meta: {},
    });

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div className="produce-create-page">
            <ProducePage>
                <Modal
                    {...modalProps}
                    mask={true}
                    onCancel={goToProducePage}
                    title={"Create Produce"}
                    width={512}
                >
                    <Form {...formProps} layout="vertical">
                        <Form.Item
                            label="Produce Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the produce name",
                                },
                            ]}
                        >
                            <Input placeholder="Enter produce name" />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter the description",
                                },
                            ]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Enter description"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Price per Unit"
                            name="price_per_unit"
                            rules={[{ required: true, type: "number", min: 0 }]}
                        >
                            <Input
                                type="number"
                                placeholder="Enter price per unit"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Quantity"
                            name="quantity"
                            rules={[{ required: true, type: "number", min: 1 }]}
                        >
                            <Input type="number" placeholder="Enter quantity" />
                        </Form.Item>

                        <Form.Item
                            label="Is On Sale"
                            name="is_on_sale"
                            valuePropName="checked"
                        >
                            <Input type="checkbox" />
                        </Form.Item>

                        <Form.Item
                            label="Discount (%)"
                            name="discount"
                            rules={[{ type: "number", min: 0, max: 100 }]}
                        >
                            <Input
                                type="number"
                                placeholder="Enter discount %"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Out of Stock"
                            name="out_of_stock"
                            valuePropName="checked"
                        >
                            <Input type="checkbox" />
                        </Form.Item>

                        <Form.Item
                            label="Available From"
                            name="available_from"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a start date",
                                },
                            ]}
                        >
                            <Input type="date" />
                        </Form.Item>

                        <Form.Item
                            label="Available To"
                            name="available_to"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select an end date",
                                },
                            ]}
                        >
                            <Input type="date" />
                        </Form.Item>

                        <Form.Item
                            label="Category ID"
                            name="category_id"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter category ID",
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                placeholder="Enter category ID"
                            />
                        </Form.Item>

                        <Form.Item label="Tags" name="tags">
                            <Input placeholder="Comma-separated tags (e.g. organic,green)" />
                        </Form.Item>

                        <Form.Item
                            label="Images"
                            name="images"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload
                                listType="picture-card"
                                accept="image/*"
                                beforeUpload={() => false} // prevents automatic upload
                                multiple
                            >
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Form>
                </Modal>
            </ProducePage>
        </div>
    );
};

export default ProduceCreatePage;
