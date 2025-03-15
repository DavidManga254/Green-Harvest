import "./SideBar.css";
import Dashboard from "../../assets/icons/Dashboard";
import Order from "../../assets/icons/order";
import Heart from "../../assets/icons/Heart";
import Bag from "../../assets/icons/Bag";
import Settings from "../../assets/icons/settings";
import Logout from "../../assets/icons/logout";
import {
    useMatchRoute,
    useNavigate,
    useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

const SideBar: React.FC = () => {
    const [activeBar, setActiveBar] = useState<
        | "dashboard"
        | "order-history"
        | "wishlist"
        | "shopping-cart"
        | "settings"
    >("");

    const navigate = useNavigate();
    const matchRoute = useMatchRoute();
    const routerState = useRouterState();

    const handleNavigate = (routename: string) => {
        if (!matchRoute({ to: routename })) {
            navigate({ to: routename });
        }
    };

    const handleActiveBar = () => {
        if (matchRoute({ to: "/account/dashboard" })) {
            setActiveBar("dashboard");
        } else if (matchRoute({ to: "/account/order-history" })) {
            setActiveBar("order-history");
        } else if (matchRoute({ to: "/account/wishlist" })) {
            setActiveBar("wishlist");
        }
    };

    useEffect(() => {
        handleActiveBar();
    }, [routerState.location.pathname]);

    return (
        <div className="sidebar-wrapper">
            <div className="nav-title">
                <span>Navigation</span>
            </div>
            <div
                onClick={() => handleNavigate("/account/dashboard")}
                className={`side-item ${activeBar === "dashboard" ? "active-nav" : ""}`}
            >
                <Dashboard width="24" height="24" />
                <span>Dashboard</span>
            </div>
            <div
                onClick={() => handleNavigate("/account/order-history")}
                className={`side-item ${activeBar === "order-history" ? "active-nav" : ""} `}
            >
                <Order width="24" height="24" />
                <span>order History</span>
            </div>
            <div
                onClick={() => handleNavigate("/account/wishlist")}
                className={`side-item`}
            >
                <Heart width="24" height="24" />
                <span>Wishlist</span>
            </div>
            <div className={`side-item`}>
                <Bag width="24" height="24" />
                <span>Shoppping Cart</span>
            </div>
            <div className={`side-item`}>
                <Settings width="24" height="24" />
                <span>Settings</span>
            </div>
            <div className={`side-item`}>
                <Logout width="24" height="24" />
                <span>Log-out</span>
            </div>
        </div>
    );
};

export default SideBar;
