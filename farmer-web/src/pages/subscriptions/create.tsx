import { Create, useForm, useSelect } from "@refinedev/antd";
import {
    Form,
    Input,
    Switch,
    Upload,
    Button,
    Typography,
    Row,
    Col,
    Card,
    Image,
    Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useList } from "@refinedev/core";

const { Text } = Typography;

export const SubscriptionCreate = () => {
    const { formProps, form, saveButtonProps } = useForm({
        resource: "subscriptions",
        redirect: "list",
    });

    // Get subscription plan templates
    const { selectProps: templateSelectProps } = useSelect({
        resource: "subscription-plan-templates",
        optionLabel: "name",
        optionValue: "id",
    });

    // Fetch full produce list with images and prices
    const { data: produceData, isLoading: isLoadingProduce } = useList({
        resource: "produce",
        pagination: { mode: "off" },
    });

    const produces = produceData?.data ?? [];

    const handleImageUpload = async (options: any) => {
        const { onSuccess, onError, file } = options;
        setTimeout(() => {
            if (file) {
                onSuccess("ok");
                form.setFieldsValue({
                    cover_image: URL.createObjectURL(file),
                });
            } else {
                onError(new Error("Upload failed"));
            }
        }, 1000);
    };

    return (
        <Create
            saveButtonProps={saveButtonProps}
            title="Create Subscription Plan"
        >
            <Form
                {...formProps}
                layout="vertical"
                onFinish={(values) => {
                    values.items = values.items.map((id: number) => ({
                        produce_id: id,
                    }));
                    formProps.onFinish?.(values);
                }}
            >
                <Form.Item
                    label="Subscription Template"
                    name="subscription_plan_template_id"
                    rules={[
                        { required: true, message: "Template is required" },
                    ]}
                >
                    <Select
                        placeholder="Select a template"
                        {...templateSelectProps}
                    />
                </Form.Item>

                <Form.Item
                    label="Cover Image"
                    name="cover_image"
                    rules={[{ required: true, message: "Image is required" }]}
                >
                    <Input placeholder="Paste image URL or upload below" />
                </Form.Item>

                <Form.Item label="Upload Cover (optional)">
                    <Upload
                        customRequest={handleImageUpload}
                        showUploadList={false}
                        maxCount={1}
                    >
                        <Button icon={<UploadOutlined />}>Upload Image</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Items (Produce to include)"
                    name="items"
                    rules={[
                        {
                            required: true,
                            message: "Please select at least one produce item",
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        placeholder="Select produce items"
                        optionLabelProp="label"
                        optionFilterProp="label"
                        labelInValue={false}
                        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                    >
                        {produces.map((produce: any) => {
                            const image = produce.images?.[0]?.image_path;
                            return (
                                <Select.Option
                                    key={produce.id}
                                    value={produce.id}
                                    label={produce.name}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        {image && (
                                            <img
                                                src={image}
                                                alt={produce.name}
                                                style={{
                                                    width: 32,
                                                    height: 32,
                                                    borderRadius: 4,
                                                    objectFit: "cover",
                                                }}
                                            />
                                        )}
                                        <Text>{produce.name}</Text>
                                    </div>
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Is Active?"
                    name="is_active"
                    valuePropName="checked"
                    initialValue={true}
                >
                    <Switch />
                </Form.Item>
            </Form>
        </Create>
    );
};
