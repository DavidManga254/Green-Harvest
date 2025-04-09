import {
    Authenticated,
    GitHubBanner,
    Refine,
    WelcomePage,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import dataProvider from "./providers/dataProvider";
import { Login } from "./pages/login";
import { ForgotPassword } from "./pages/forgotPassword";
import authProvider from "./providers/authProvider";
import DashboardPage from "./pages/dashboard";
import resources from "./resources";
import Layout from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <AntdApp>
                    <DevtoolsProvider>
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
                                        path="/dashboard"
                                        element={<DashboardPage />}
                                    />
                                </Route>
                            </Routes>
                            <RefineKbar />
                            <UnsavedChangesNotifier />
                            <DocumentTitleHandler />
                        </Refine>
                        <DevtoolsPanel />
                    </DevtoolsProvider>
                </AntdApp>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
