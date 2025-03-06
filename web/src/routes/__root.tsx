import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
    component: () => (
        <div className="page-wrapper">
            <Header />
            <Outlet />
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    ),
});
