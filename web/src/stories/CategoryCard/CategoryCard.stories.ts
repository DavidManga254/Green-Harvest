import type { Meta, StoryObj } from "@storybook/react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const meta: Meta<typeof CategoryCard> = {
    component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Primary: Story = {
    args: {
        name: "Fresh Fruit",
        image: "src/assets/images/category/fruit-category.png",
    },
};
