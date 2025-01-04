import type { Meta, StoryObj } from "@storybook/react";
import NotFound from "../../components/404/404";

const meta: Meta<typeof NotFound> = {
    component: NotFound,
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Primary: Story = {};
