import type { Meta, StoryObj } from "@storybook/react";
import CartProducts from "../../components/CartProducts/CartProducts";

const meta: Meta<typeof CartProducts> = {
    component: CartProducts,
};

export default meta;
type Story = StoryObj<typeof CartProducts>;

export const Primary: Story = {};
