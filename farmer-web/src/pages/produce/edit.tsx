import { Col, Form, Input, Modal, Row, Select, Space, Spin } from "antd";
import ProducePage from "./list";
import { Edit, useForm, useModalForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { useEffect, useState } from "react";
import { Avatar, Upload, Button, message } from "antd";
import {
    EditOutlined,
    LoadingOutlined,
    CheckOutlined,
} from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import TextArea from "antd/es/input/TextArea";

const EditProductPage: React.FC = () => {
    const { saveButtonProps, formProps, formLoading, query } = useForm({
        redirect: false,
    });

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [tagOptions, setTagOptions] = useState<
        { label: string; value: string }[]
    >([]);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        const data = query?.data?.data;

        if (data?.tags) {
            try {
                console.log("Data tags:", data.tags);
                const parsedTags: string[] = JSON.parse(data.tags);

                const options = parsedTags.map((tag) => ({
                    label: tag,
                    value: tag,
                }));

                setTagOptions(options);

                // Also set form values here if needed
                formProps.form?.setFieldsValue({
                    ...data,
                    tags: parsedTags,
                });
            } catch (err) {
                console.error("Failed to parse tags JSON:", err);
            }
        }

        if (data?.images) {
            console.log("Data images:", data.images[0].image_path);
            setImageUrl(data.images[0].image_path);
        }
    }, [query?.data]);

    const handleChange = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === "uploading") {
            setUploading(true);
            setUploaded(false);
        }

        if (info.file.status === "done") {
            const newImageUrl = URL.createObjectURL(info.file.originFileObj!);
            setImageUrl(newImageUrl);
            setUploading(false);
            setUploaded(true);
            message.success("Image updated successfully");
        }

        if (info.file.status === "error") {
            setUploading(false);
            message.error("Upload failed");
        }
    };

    const go = useGo();

    const goToProducePage = () => {
        go({
            to: { resource: "produce", action: "list" },
            options: { keepQuery: true },
            type: "replace",
        });
    };

    if (query?.isFetching || !query?.data) {
        return (
            <div
                style={{
                    display: "flex",
                    height: "100vh",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Spin size="large" tip="Loading product..." />
            </div>
        );
    }

    return (
        <div className="edit-product-page">
            <Row gutter={[32, 32]}>
                <Col xs={24} xl={12}></Col>
            </Row>
            <Edit
                isLoading={formLoading}
                saveButtonProps={saveButtonProps}
                breadcrumb={false}
            >
                <Form {...formProps}>
                    <Row gutter={[10, 15]}>
                        <Col xs={24} sm={24} xl={24}>
                            <Space
                                direction="vertical"
                                size={20}
                                style={{ width: "100%" }}
                            >
                                <Form.Item
                                    label="Produce Name"
                                    layout="vertical"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter the produce name",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Edit Product name" />
                                </Form.Item>
                                <Form.Item
                                    label="Category"
                                    layout="vertical"
                                    name="tags"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter the produce category",
                                        },
                                    ]}
                                >
                                    {/* <Input placeholder="Edit Product category" /> */}
                                    <Select
                                        mode="multiple"
                                        size={"middle"}
                                        options={tagOptions}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Price Per Unit"
                                    name="price_per_unit"
                                    layout="vertical"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter the produce name",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Edit product proce" />
                                </Form.Item>
                                <Form.Item
                                    label="Description"
                                    name="description"
                                    layout="vertical"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter description",
                                        },
                                    ]}
                                >
                                    <TextArea placeholder="Edit description" />
                                </Form.Item>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                    }}
                                >
                                    <Avatar
                                        size={104}
                                        shape="square"
                                        src={imageUrl}
                                    />
                                    <Upload
                                        showUploadList={false}
                                        customRequest={({
                                            file,
                                            onSuccess,
                                        }) => {
                                            // Simulate an upload
                                            setTimeout(() => {
                                                onSuccess && onSuccess("ok");
                                            }, 1000);
                                        }}
                                        onChange={handleChange}
                                        accept="image/*"
                                    >
                                        <Button
                                            icon={
                                                uploading ? (
                                                    <LoadingOutlined />
                                                ) : uploaded ? (
                                                    <CheckOutlined />
                                                ) : (
                                                    <EditOutlined />
                                                )
                                            }
                                        >
                                            {uploading ? "Uploading" : "Edit"}
                                        </Button>
                                    </Upload>
                                </div>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Edit>
        </div>
    );
};

export default EditProductPage;
