import { Authenticated, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { ThemedTitleV2, useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp, Typography } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import dataProvider from "./providers/dataProvider";
import { Login } from "./pages/login";
import { ForgotPassword } from "./pages/forgotPassword";
import authProvider from "./providers/authProvider";
import DashboardPage from "./pages/dashboard";
import resources from "./resources";
import Layout from "./components/Layout";
import ProducePage from "./pages/produce/list";
import ProduceCreatePage from "./pages/produce/create";
import EditProductPage from "./pages/produce/edit";
import ChatList from "./pages/chat";
import ChatListPage from "./pages/chat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatConversationPage from "./pages/chat/$id";
import OrderList from "./pages/order/list";
import OrderShow from "./pages/order/$id";
import { SubscriptionList } from "./pages/subscriptions/list";
import { SubscriptionShow } from "./pages/subscriptions/$id";
import { SubscriptionCreate } from "./pages/subscriptions/create";
import { GiFallingLeaf } from "react-icons/gi";

const queryClient = new QueryClient();

function App() {
    const { Text } = Typography;

    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <AntdApp>
                    <DevtoolsProvider>
                        <QueryClientProvider client={queryClient}>
                            <Refine
                                dataProvider={dataProvider}
                                notificationProvider={useNotificationProvider}
                                routerProvider={routerBindings}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "ALG8PP-xeXuan-HOz8zj",
                                }}
                                authProvider={authProvider}
                                resources={resources}
                                Title={() => (
                                    <ThemedTitleV2
                                        icon={
                                            <GiFallingLeaf
                                                style={{
                                                    color: "#52c41a",
                                                    fontSize: "30px",
                                                }}
                                            />
                                        }
                                        text={
                                            <Text
                                                strong
                                                style={{
                                                    color: "#52c41a",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                ShambaBox
                                            </Text>
                                        }
                                    />
                                )}
                            >
                                <Routes>
                                    <Route path="/login" element={<Login />} />
                                    <Route
                                        path="/forgot-password"
                                        element={<ForgotPassword />}
                                    />
                                    <Route
                                        element={
                                            <Authenticated
                                                key={"authenticated-layout"}
                                                fallback={
                                                    <CatchAllNavigate
                                                        to={"/login"}
                                                    />
                                                }
                                            >
                                                <Layout>
                                                    <Outlet />
                                                </Layout>
                                            </Authenticated>
                                        }
                                    >
                                        <Route
                                            path="/"
                                            element={<DashboardPage />}
                                        />
                                        <Route
                                            path="/dashboard"
                                            element={<DashboardPage />}
                                        />
                                        <Route path="/produce">
                                            <Route
                                                index
                                                element={<ProducePage />}
                                            />
                                            <Route
                                                path="create"
                                                element={<ProduceCreatePage />}
                                            />
                                            <Route
                                                path="edit/:id"
                                                element={<EditProductPage />}
                                            />
                                        </Route>
                                        <Route path="/chat">
                                            <Route
                                                index
                                                element={<ChatListPage />}
                                            />
                                            <Route
                                                path="/chat/:id"
                                                element={
                                                    <ChatConversationPage />
                                                }
                                            />
                                        </Route>
                                        <Route path="/orders">
                                            <Route
                                                index
                                                element={<OrderList />}
                                            />
                                            <Route
                                                path="/orders/:id"
                                                element={<OrderShow />}
                                            />
                                        </Route>
                                        <Route path="/subscriptions">
                                            <Route
                                                index
                                                element={<SubscriptionList />}
                                            />
                                            <Route
                                                path="/subscriptions/:id"
                                                element={<SubscriptionShow />}
                                            />
                                            <Route
                                                path="/subscriptions/create"
                                                element={<SubscriptionCreate />}
                                            />
                                        </Route>
                                    </Route>
                                </Routes>
                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                        </QueryClientProvider>
                        <DevtoolsPanel />
                    </DevtoolsProvider>
                </AntdApp>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
