import {
    Col,
    Form,
    Input,
    Row,
    Space,
    Spin,
    Select,
    Image,
    Typography,
} from "antd";
import ProducePage from "./list";
import { Edit, useForm } from "@refinedev/antd";
import { useGo } from "@refinedev/core";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

const { Title } = Typography;

const EditProductPage: React.FC = () => {
    const go = useGo();

    const { saveButtonProps, formProps, formLoading, query } = useForm({
        redirect: false,
    });

    const form = formProps.form;
    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        const data = query?.data?.data;
        if (data) {
            const imageUrls =
                data.images?.map((img: any) => img.image_path) || [];
            setImageList(imageUrls);
            form?.setFieldsValue({
                ...data,
                images: imageUrls,
            });
        }
    }, [query?.data]);

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
            <Edit
                isLoading={formLoading}
                saveButtonProps={saveButtonProps}
                breadcrumb={false}
            >
                <Form {...formProps} layout="vertical" form={form}>
                    <Row gutter={[10, 15]}>
                        <Col xs={24}>
                            <Space
                                direction="vertical"
                                style={{ width: "100%" }}
                                size={20}
                            >
                                <Form.Item
                                    label="Produce Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter produce name",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Edit product name" />
                                </Form.Item>

                                <Form.Item
                                    label="Price Per Unit"
                                    name="price_per_unit"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter price",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="number"
                                        placeholder="Enter price"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Enter description",
                                        },
                                    ]}
                                >
                                    <TextArea
                                        placeholder="Edit description"
                                        rows={4}
                                    />
                                </Form.Item>

                                <Form.Item label="Image URLs" name="images">
                                    <Select
                                        mode="tags"
                                        tokenSeparators={[","]}
                                        placeholder="Add image URLs"
                                        style={{ width: "100%" }}
                                        onChange={(val) => setImageList(val)}
                                    />
                                </Form.Item>

                                {imageList.length > 0 && (
                                    <>
                                        <Title
                                            level={5}
                                            style={{ marginBottom: 8 }}
                                        >
                                            Image Preview
                                        </Title>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 12,
                                                marginBottom: 16,
                                            }}
                                        >
                                            {imageList.map((url, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={url}
                                                    width={80}
                                                    height={80}
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
                                    </>
                                )}
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Edit>
        </div>
    );
};

export default EditProductPage;
