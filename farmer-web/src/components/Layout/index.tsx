import { ThemedLayoutV2 } from "@refinedev/antd";

interface LayoutInterface {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return <ThemedLayoutV2>{children}</ThemedLayoutV2>;
};

export default Layout;
