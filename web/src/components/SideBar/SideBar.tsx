import "./SideBar.css";
import Dashboard from "../../assets/icons/Dashboard";
import Order from "../../assets/icons/order";
import Heart from "../../assets/icons/Heart";
import Bag from "../../assets/icons/Bag";
import Logout from "../../assets/icons/logout";
import { Link, useRouterState } from "@tanstack/react-router";
import { MessageOutlined } from "@mui/icons-material";

const SideBar: React.FC = () => {
    const { location } = useRouterState();
    const path = location.pathname;

    // Utility to check if a path is currently active
    const isActive = (route: string) => path.startsWith(route);

    return (
        <div className="sidebar-wrapper">
            <div className="nav-title">
                <span>Navigation</span>
            </div>

            <Link
                to="/account/dashboard"
                className={`side-item ${isActive("/account/dashboard") ? "active-nav" : ""}`}
            >
                <Dashboard width="24" height="24" />
                <span>Dashboard</span>
            </Link>

            <Link
                to="/account/order-history"
                className={`side-item ${isActive("/account/order-history") ? "active-nav" : ""}`}
            >
                <Order width="24" height="24" />
                <span>Order History</span>
            </Link>
            <Link to="/chat" className={`side-item `}>
                <MessageOutlined width="24" height="24" />
                <span>Chat</span>
            </Link>

            <Link
                to="/checkout"
                className={`side-item ${isActive("/checkout") ? "active-nav" : ""}`}
            >
                <Bag width="24" height="24" />
                <span>Shopping Cart</span>
            </Link>

            <div className="side-item">
                <Logout width="24" height="24" />
                <span>Log-out</span>
            </div>
        </div>
    );
};

export default SideBar;
