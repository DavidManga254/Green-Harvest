import type { Meta, StoryObj } from "@storybook/react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const meta: Meta<typeof ProductDetail> = {
    component: ProductDetail,
};

export default meta;
type Story = StoryObj<typeof ProductDetail>;

export const Primary: Story = {};
