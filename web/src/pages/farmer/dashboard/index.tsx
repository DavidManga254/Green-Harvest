import "./index.css";
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const FarmerDashboard: React.FC = () => {
    const orders = [
        {
            id: "#2456JL",
            product: "Nike Sportswear",
            date: "Jan 12, 12:23 pm",
            price: "$134.00",
            payment: "Transfer",
            status: "Processing",
        },
        {
            id: "#5435DF",
            product: "Acqua di Parma",
            date: "May 01, 01:13 pm",
            price: "$23.00",
            payment: "Credit Card",
            status: "Completed",
        },
        {
            id: "#9876XC",
            product: "Allen Solly",
            date: "Sep 20, 09:08 am",
            price: "$441.00",
            payment: "Transfer",
            status: "Completed",
        },
        {
            id: "#2456JL",
            product: "Nike Sportswear",
            date: "Jan 12, 12:23 pm",
            price: "$134.00",
            payment: "Transfer",
            status: "Processing",
        },
        {
            id: "#5435DF",
            product: "Acqua di Parma",
            date: "May 01, 01:13 pm",
            price: "$23.00",
            payment: "Credit Card",
            status: "Completed",
        },
        {
            id: "#9876XC",
            product: "Allen Solly",
            date: "Sep 20, 09:08 am",
            price: "$441.00",
            payment: "Transfer",
            status: "Completed",
        },
    ];

    return (
        <div className="farmer-dashboard-page">
            <div className="top-section">
                <div className="profile-image">
                    <img src="/src/assets/images/apple.png" />
                    <div>
                        <p className="name">David Manga</p>
                        <p className="email">mangadavid2@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-title">
                <h1>
                    Welcome back, <span>David !</span>
                </h1>
                <span className="overview">
                    Here's Your Current Sales Overview
                </span>
            </div>
            <div className="summary-cards">
                <div className="order-value">
                    <div className="card-info">
                        <h1 className="card-title">AVG.Order Value</h1>
                        <div className="avg">
                            <h1>Ksh77.21</h1>
                            <p>
                                <span>+3.16%</span> From last month
                            </p>
                        </div>
                    </div>
                </div>
                <div className="total-order">
                    <div className="card-info">
                        <h1 className="card-title">Total Orders</h1>
                        <div className="total">
                            <h1>Ksh2,107</h1>
                            <p>
                                <span>+3.16%</span> From last month
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lifetime-value">
                    <div className="card-info">
                        <h1 className="card-title">Lifetime Value</h1>
                        <div className="total">
                            <h1>Ksh2,107</h1>
                            <p>
                                <span>+3.16%</span> From last month
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardSection />
            <div className="orders-container">
                <div className="orders-header">
                    <h2>Latest Orders</h2>
                    <div className="orders-actions">
                        <button>Customize</button>
                        <button>Filter</button>
                        <button>Export</button>
                    </div>
                </div>

                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Order Date</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.product}</td>
                                <td>{order.date}</td>
                                <td>{order.price}</td>
                                <td>{order.payment}</td>
                                <td
                                    className={`order-status ${
                                        order.status === "Processing"
                                            ? "processing"
                                            : order.status === "Completed"
                                              ? "completed"
                                              : ""
                                    }`}
                                >
                                    {order.status}
                                </td>
                                <td>
                                    <button className="action-button">⋯</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FarmerDashboard;

function DashboardSection() {
    return (
        <div className="dashboard-section">
            <SalesOvertimeChart />
            <TopSellingProducts />
        </div>
    );
}

const data = [
    { month: "Jun", revenue: 5000, order: 7000 },
    { month: "Jul", revenue: 9000, order: 12000 },
    { month: "Aug", revenue: 5800, order: 8800 },
    { month: "Sep", revenue: 4000, order: 8200 },
    { month: "Oct", revenue: 10500, order: 9100 },
    { month: "Nov", revenue: 9800, order: 12300 },
    { month: "Dec", revenue: 13500, order: 9900 },
    { month: "Jan", revenue: 17000, order: 11500 },
];

function SalesOvertimeChart() {
    return (
        <div className="chart-box">
            <div className="chart-header">
                <h3>Sales Overtime</h3>
                <Legend />
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis
                        tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#a64ac9"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey="order"
                        stroke="#1e4bff"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

const products = [
    {
        name: "Red Tape Sports Shoes for Men",
        sales: 12429,
        stock: 135,
        image: "/src/assets/images/apple.png",
    },
    {
        name: "Fastrack FS1 Pro Smartwatch",
        sales: 1543,
        stock: 76,
        image: "/src/assets/images/apple.png",
    },
    {
        name: "Leriya Fashion Men's Shirt",
        sales: 7222,
        stock: 465,
        image: "/src/assets/images/apple.png",
    },
];

function TopSellingProducts() {
    return (
        <div className="top-products-box">
            <div className="top-products-header">
                <h3>Top Selling Product</h3>
                <button className="see-all-button">See All Product</button>
            </div>
            <ul className="product-list">
                {products.map((item, index) => (
                    <li key={index} className="product-item">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="product-img"
                        />
                        <div className="product-info">
                            <p className="product-name">{item.name}</p>
                            <p className="product-sales">
                                {item.sales.toLocaleString()} Sales
                            </p>
                        </div>
                        <div className="product-status">
                            <p>
                                <span className="status-dot available"></span>{" "}
                                Available
                            </p>
                            <span className="stock-count">
                                {item.stock} Stocks Remaining
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
