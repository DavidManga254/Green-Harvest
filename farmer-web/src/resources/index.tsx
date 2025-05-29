import {
    DashboardOutlined,
    MessageOutlined,
    ProductOutlined,
    ShoppingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

const resources: IResourceItem[] = [
    {
        name: "dashboard",
        list: "/",
        meta: {
            label: "Dashboard",
            icon: <DashboardOutlined />,
        },
    },
    {
        name: "chat",
        list: "/chat",
        show: "/chat/:id",
        meta: {
            label: "Chats",
            icon: <MessageOutlined />, // import from @ant-design/icons
        },
    },
    {
        name: "produce",
        list: "/produce",
        show: "/produce/:id",
        create: "/produce/create",
        edit: "/produce/edit/:id",
        meta: {
            label: "Produce",
            icon: <ProductOutlined />,
        },
    },
    {
        name: "subscriptions",
        list: "/subscriptions",
        show: "/subscriptions/:id",
        create: "/subscriptions/create",
        meta: {
            label: "My Subscriptions",
        },
    },
    {
        name: "orders",
        list: "/orders",
        show: "/orders/:id",
        edit: "/orders/edit/:id",
        meta: {
            label: "Orders",
            icon: <ShoppingOutlined />,
        },
    },
];

export default resources;
