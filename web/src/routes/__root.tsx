import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
    component: () => (
        <div className="page-wrapper">
            <Header />
            <div
                style={{ maxWidth: "1100px", margin: "0 auto" }}
                className="content-wrapper"
            >
                <Outlet />
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    ),
});
