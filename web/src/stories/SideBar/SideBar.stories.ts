import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "../../components/SideBar/SideBar";

const meta: Meta<typeof SideBar> = {
    component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Primary: Story = {};
