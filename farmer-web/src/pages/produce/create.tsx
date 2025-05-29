import { Row, Col, Form, Input, Modal, Checkbox, Select, Image } from "antd";
import { InputNumber } from "antd";
import { useEffect } from "react";
import { useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import ProducePage from "./list";

const { TextArea } = Input;

const ProduceCreatePage: React.FC = () => {
    const go = useGo();

    const goToProducePage = () => {
        go({
            to: { resource: "produce", action: "list" },
            options: { keepQuery: true },
            type: "replace",
        });
    };

    const { formProps, modalProps, form } = useModalForm({
        action: "create",
        defaultVisible: true,
        resource: "produce",
        redirect: false,
        mutationMode: "pessimistic",
        onMutationSuccess: goToProducePage,
        transform: (values) => ({
            ...values,
            images: values.images ?? [],
        }),
    });

    const imageList: string[] = Form.useWatch("images", form) || [];

    return (
        <div className="produce-create-page">
            <ProducePage>
                <Modal
                    {...modalProps}
                    mask
                    onCancel={goToProducePage}
                    title="Create Produce"
                    width={600}
                >
                    <Form {...formProps} layout="vertical" form={form}>
                        <Form.Item
                            label="Produce Name"
                            name="name"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="e.g. Fresh Tomatoes" />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: true }]}
                        >
                            <TextArea
                                rows={4}
                                placeholder="Short description..."
                            />
                        </Form.Item>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Price per Unit"
                                    name="price_per_unit"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber
                                        min={0}
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Quantity"
                                    name="quantity"
                                    rules={[{ required: true }]}
                                >
                                    <InputNumber
                                        min={1}
                                        style={{ width: "100%" }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="is_on_sale"
                                    valuePropName="checked"
                                >
                                    <Checkbox>Is On Sale</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Discount (%)"
                                    name="discount"
                                    rules={[
                                        { type: "number", min: 0, max: 100 },
                                    ]}
                                >
                                    <InputNumber
                                        min={0}
                                        max={100}
                                        style={{ width: "100%" }}
                                        placeholder="e.g. 10"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item name="out_of_stock" valuePropName="checked">
                            <Checkbox>Out of Stock</Checkbox>
                        </Form.Item>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Available From"
                                    name="available_from"
                                    rules={[{ required: true }]}
                                >
                                    <Input type="date" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Available To"
                                    name="available_to"
                                    rules={[{ required: true }]}
                                >
                                    <Input type="date" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            label="Category ID"
                            name="category_id"
                            rules={[{ required: true }]}
                        >
                            <InputNumber min={1} style={{ width: "100%" }} />
                        </Form.Item>

                        {/* <Form.Item label="Tags" name="tags">
                            <Select mode="tags" placeholder="Add tags" />
                        </Form.Item> */}

                        <Form.Item label="Image URLs" name="images">
                            <Select
                                mode="tags"
                                placeholder="Enter image URLs"
                                tokenSeparators={[","]}
                            />
                        </Form.Item>

                        {imageList.length > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 8,
                                    marginBottom: 16,
                                }}
                            >
                                {imageList.map((url, idx) => (
                                    <Image
                                        key={idx}
                                        src={url}
                                        width={60}
                                        height={60}
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: 6,
                                            border: "1px solid #ddd",
                                        }}
                                        alt={`img-${idx}`}
                                        fallback="/placeholder.png"
                                    />
                                ))}
                            </div>
                        )}
                    </Form>
                </Modal>
            </ProducePage>
        </div>
    );
};

export default ProduceCreatePage;
