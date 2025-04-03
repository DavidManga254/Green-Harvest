import { Link } from "@tanstack/react-router";
import "./index.css";

const OrderHistory: React.FC = () => {
    const orders = [
        {
            orderId: "#738",
            date: "8 Sep, 2020",
            total: "$135.00 (5 Products)",
            status: "Processing",
        },
        {
            orderId: "#703",
            date: "24 May, 2020",
            total: "$25.00 (1 Product)",
            status: "on the way",
        },
        {
            orderId: "#130",
            date: "22 Oct, 2020",
            total: "$250.00 (4 Products)",
            status: "Completed",
        },
        {
            orderId: "#561",
            date: "1 Feb, 2020",
            total: "$35.00 (1 Product)",
            status: "Completed",
        },
        {
            orderId: "#536",
            date: "21 Sep, 2020",
            total: "$578.00 (13 Products)",
            status: "Completed",
        },
        {
            orderId: "#492",
            date: "22 Oct, 2020",
            total: "$345.00 (7 Products)",
            status: "Completed",
        },
    ];

    return (
        <div className="order-history-wrapper">
            <div className="history-title">
                <h2>Recent Order History</h2>
                <span>View All</span>
            </div>
            <table>
                <tr className="title">
                    <th>ORDER ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                {orders.map((order, index) => (
                    <tr className="orders">
                        <td>{order.orderId}</td>
                        <td>{order.date}</td>
                        <td>{order.total}</td>
                        <td>{order.status}</td>
                        <td className="details">
                            <Link
                                key={index}
                                to={`/account/order-history/$orderId`}
                                params={{
                                    orderId: `${index}`,
                                }}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                view Details
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default OrderHistory;
