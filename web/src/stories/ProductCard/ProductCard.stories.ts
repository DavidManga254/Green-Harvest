import type { Meta, StoryObj } from "@storybook/react";
import Productcard from "../../components/ProductCard/ProductCard";

const meta: Meta<typeof Productcard> = {
    component: Productcard,
};

export default meta;
type Story = StoryObj<typeof Productcard>;

export const Default: Story = {
    args: {
        productName: "Green Apples",
        productImage: "src/assets/images/apple.png",
    },
};

export const Sale: Story = {
    args: {
        productName: "Green Apples",
        productImage: "src/assets/images/apple.png",
        onSale: "sale",
        salePercent: 50,
    },
};

export const New: Story = {
    args: {
        productName: "Green Apples",
        productImage: "src/assets/images/apple.png",
        onSale: "new",
    },
};

export const Best: Story = {
    args: {
        productName: "Green Apples",
        productImage: "src/assets/images/apple.png",
        onSale: "best",
    },
};

export const Outstock: Story = {
    args: {
        productName: "Green Apples",
        productImage: "src/assets/images/apple.png",
        onSale: "outOfStock",
    },
};
