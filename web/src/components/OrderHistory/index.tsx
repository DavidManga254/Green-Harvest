import { Link } from "@tanstack/react-router";
import "./index.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Order from "../../api/Order";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const OrderHistory: React.FC = () => {
    const [page, setPage] = useState(1);
    const dataPerPage = 6;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", page],
        queryFn: () =>
            Order.getOrderHistory({ page, data_per_page: dataPerPage }),
        placeholderData: (prev) => prev,
        gcTime: 5 * 60 * 1000,
    });

    const orders = data?.orders || [];
    const totalPages = data?.pagination?.total_pages || 1;

    const handlePageChange = (_: any, value: number) => {
        setPage(value);
    };

    return (
        <div className="order-history-wrapper">
            <div className="history-title">
                <h2>Recent Order History</h2>
                <span>View All</span>
            </div>

            {isLoading ? (
                <p className="loading-text">Loading your orders...</p>
            ) : isError ? (
                <p className="error-text">
                    Something went wrong fetching your orders.
                </p>
            ) : orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <>
                    <table>
                        <thead>
                            <tr className="title">
                                <th>ORDER ID</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className="orders" key={order.id}>
                                    <td>#{order.id}</td>
                                    <td>
                                        {new Date(
                                            order.created_at,
                                        ).toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </td>
                                    <td>
                                        KSH
                                        {parseFloat(order.total_price).toFixed(
                                            2,
                                        )}
                                        ({order.items?.length || 0} Product
                                        {order.items?.length !== 1 ? "s" : ""})
                                    </td>
                                    <td>{order.status.replaceAll("_", " ")}</td>
                                    <td className="details">
                                        <Link
                                            to={`/account/order-history/${order.id}`}
                                            params={{ orderId: `${order.id}` }}
                                            style={{
                                                textDecoration: "none",
                                                color: "limegreen",
                                                fontWeight: "500",
                                            }}
                                        >
                                            view Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Material UI Pagination */}
                    <Box
                        sx={{
                            mt: 3,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                            color="success"
                            shape="rounded"
                        />
                    </Box>
                </>
            )}
        </div>
    );
};

export default OrderHistory;
