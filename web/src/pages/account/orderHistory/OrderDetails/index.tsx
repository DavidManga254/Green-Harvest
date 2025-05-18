import "./index.css";
import {
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query";
import Order from "../../../../api/Order";
import { Typography, Box } from "@mui/material";
import { Check } from "@mui/icons-material";

interface OrderDetailsPageInterface {
    orderId: string | undefined;
}

const OrderDetailsPage: React.FC<OrderDetailsPageInterface> = ({ orderId }) => {
    const {
        data: order,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["order-details", orderId],
        queryFn: () => Order.getOrderDetails(orderId!),
        enabled: !!orderId,
    });

    if (isLoading) return <p>Loading order details...</p>;
    if (isError || !order) return <p>Could not load order.</p>;

    const totalProducts = order.items.length;

    return (
        <div className="order-details-page">
            <div className="order-title">
                <h1>Order Details</h1>
                <span>{new Date(order.created_at).toLocaleDateString()}</span>
                <span>
                    {totalProducts} Product{totalProducts > 1 ? "s" : ""}
                </span>
            </div>

            <div className="order-adress">
                <div className="addresses">
                    <div className="billing-address">
                        <h1>BILLING ADDRESS</h1>
                        <div className="billing-detail">
                            <div className="name-section">
                                <h2>{order.user?.name ?? "John Doe"}</h2>
                                <p>{order.user?.address ?? "Nairobi, Kenya"}</p>
                            </div>
                            <div className="email-section">
                                <h3>EMAIL</h3>
                                <p>{order.user?.email}</p>
                            </div>
                            <div className="number-section">
                                <h3>PHONE</h3>
                                <p>{order.user?.phone ?? "---"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="shipping-address">
                        <h1>SHIPPING ADDRESS</h1>
                        <div className="billing-detail">
                            <div className="name-section">
                                <h2>{order.user?.name ?? "John Doe"}</h2>
                                <p>{order.user?.address ?? "Nairobi, Kenya"}</p>
                            </div>
                            <div className="email-section">
                                <h3>EMAIL</h3>
                                <p>{order.user?.email}</p>
                            </div>
                            <div className="number-section">
                                <h3>PHONE</h3>
                                <p>{order.user?.phone ?? "---"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-summary">
                    <div className="order-summary-title">
                        <div className="id">
                            <h3>ORDER ID</h3>
                            <p>#{order.id}</p>
                        </div>
                        <div className="payment">
                            <h3>PAYMENT METHOD</h3>
                            <p>{order.payment_method ?? "Unknown"}</p>
                        </div>
                    </div>
                    <div className="order-calculation">
                        <div>
                            <h4>Subtotal:</h4>
                            <span>
                                Ksh{parseFloat(order.total_price).toFixed(2)}
                            </span>
                        </div>
                        <div>
                            <h4>Discount:</h4>
                            <span>{order.discount ?? 0}%</span>
                        </div>
                        <div>
                            <h4>Shipping</h4>
                            <span>
                                {order.shipping_fee > 0
                                    ? `Ksh${order.shipping_fee}`
                                    : "Free"}
                            </span>
                        </div>
                        <div className="total">
                            <h4>Total</h4>
                            <span>
                                KSh
                                {parseFloat(order.total_price) -
                                    parseFloat(order.total_price) *
                                        ((order.discount ?? 0) / 100)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="process-visual">
                <VerticalOrderStepper statuses={order.statuses} />
            </div>

            <div className="product-list">
                <table>
                    <thead>
                        <tr>
                            <th className="product">PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map((item, index) => (
                            <tr key={index}>
                                <td className="img-section">
                                    <img
                                        src={
                                            item.produce?.image ||
                                            "/placeholder.png"
                                        }
                                        alt={item.produce?.name}
                                    />
                                    <p>{item.produce?.name}</p>
                                </td>
                                <td>Ksh{item.price}</td>
                                <td>x{item.quantity}</td>
                                <td>Ksh{item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetailsPage;

interface OrderStatus {
    status: string;
    created_at: string;
}

interface Props {
    statuses: OrderStatus[];
}

const VerticalOrderStepper: React.FC<Props> = ({ statuses }) => {
    const allSteps = [
        "order_received",
        "processing",
        "on_the_way",
        "delivered",
    ];

    const completedSteps = statuses.map((s) => s.status);
    const currentStep = allSteps.findIndex(
        (step) => !completedSteps.includes(step),
    );

    return (
        <Box mt={2}>
            <Typography variant="h6" gutterBottom>
                Order Status
            </Typography>
            <Stepper
                orientation="vertical"
                activeStep={currentStep === -1 ? allSteps.length : currentStep}
            >
                {allSteps.map((stepLabel, index) => {
                    const found = statuses.find((s) => s.status === stepLabel);

                    return (
                        <Step key={stepLabel} completed={Boolean(found)}>
                            <StepLabel
                                StepIconComponent={() =>
                                    found ? (
                                        <Check color="success" />
                                    ) : (
                                        <div>{index + 1}</div>
                                    )
                                }
                            >
                                <Typography fontWeight="bold">
                                    {formatStatusLabel(stepLabel)}
                                </Typography>
                                {found && (
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {new Date(
                                            found.created_at,
                                        ).toLocaleString()}
                                    </Typography>
                                )}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
};

function formatStatusLabel(label: string) {
    return label
        .split("_")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");
}
