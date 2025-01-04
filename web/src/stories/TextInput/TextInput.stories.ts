import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../../components/Form/TextInput/TextInput";

const meta: Meta<typeof TextInput> = {
    component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        message: "Validation Error",
        validationState: "default",
        placeholder: "Email",
    },
};

export const Error: Story = {
    args: {
        message: "Validation Error",
        validationState: "error",
    },
};

export const Warning: Story = {
    args: {
        message: "Validation Warning",
        validationState: "warning",
    },
};
