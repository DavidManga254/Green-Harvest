import "./index.css";
import {
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    stepConnectorClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";

interface OrderDetailsPageInterface {
    orderId: string | undefined;
}

const OrderDetailsPage: React.FC<OrderDetailsPageInterface> = ({ orderId }) => {
    const orderItems = [
        {
            productName: "Red Capsicum",
            price: 14.0,
            quantity: 5,
            subtotal: 70.0,
            image: "/src/assets/images/apple.png",
        },
        {
            productName: "Green Capsicum",
            price: 14.0,
            quantity: 2,
            subtotal: 28.0,
            image: "/src/assets/images/apple.png",
        },
        {
            productName: "Green Chili Green Chili Green Chiljffffffffjji",
            price: 26.7,
            quantity: 10,
            subtotal: 267.0,
            image: "/src/assets/images/apple.png",
        },
    ];

    return (
        <div className="order-details-page">
            <div className="order-title">
                <h1>Order Details</h1>
                <span>April 24, 2024</span>
                <span>3 Products</span>
            </div>
            <div className="order-adress">
                <div className="addresses">
                    <div className="billing-address">
                        <h1>BILLING ADDRESS</h1>
                        <div className="billing-detail">
                            <div className="name-section">
                                <h2>Dainne Russell</h2>
                                <p>
                                    4140 Parker Rd. Allentown, New Mexico 31134
                                </p>
                            </div>
                            <div className="email-section">
                                <h3>EMAIL</h3>
                                <p>dainne.ressell@gmail.com</p>
                            </div>
                            <div className="number-section">
                                <h3>PHONE</h3>
                                <p>(671) 555-0110</p>
                            </div>
                        </div>
                    </div>
                    <div className="shipping-address">
                        <h1>BILLING ADDRESS</h1>
                        <div className="billing-detail">
                            <div className="name-section">
                                <h2>Dainne Russell</h2>
                                <p>
                                    4140 Parker Rd. Allentown, New Mexico 31134
                                </p>
                            </div>
                            <div className="email-section">
                                <h3>EMAIL</h3>
                                <p>dainne.ressell@gmail.com</p>
                            </div>
                            <div className="number-section">
                                <h3>PHONE</h3>
                                <p>(671) 555-0110</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-summary">
                    <div className="order-summary-title">
                        <div className="id">
                            <h3>ORDER ID</h3>
                            <p>#412</p>
                        </div>
                        <div className="payment">
                            <h3>PAYMENT METHOD</h3>
                            <p>Paypal</p>
                        </div>
                    </div>
                    <div className="order-calculation">
                        <div>
                            <h4>Subtotal:</h4>
                            <span>$365.00</span>
                        </div>
                        <div>
                            <h4>Discount:</h4>
                            <span>20%</span>
                        </div>
                        <div>
                            <h4>Shipping</h4>
                            <span>Free</span>
                        </div>
                        <div className="total">
                            <h4>Total</h4>
                            <span>$84.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="process-visual">
                <OrderStatusStepper />
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
                        {orderItems.map((product, index) => (
                            <tr key={index}>
                                <td className="img-section">
                                    <img src={product.image} />
                                    <p>{product.productName}</p>
                                </td>
                                <td>{product.price}</td>
                                <td>x{product.quantity}</td>
                                <td>Ksh{product.subtotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderDetailsPage;

const steps = ["Order received", "Processing", "On the way", "Delivered"];
const activeStep = 1; // 0-based index

const CustomConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 20,
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: "#e0e0e0",
        borderRadius: 1,
    },
    // Fix: highlight connector between completed steps
    [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
        backgroundColor: "#4caf50",
    },
    [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
        backgroundColor: "#4caf50",
    },
}));

const StepIconContainer = styled("div")<{
    ownerState: { active?: boolean; completed?: boolean };
}>(({ ownerState }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    height: 36,
    borderRadius: "50%",
    fontWeight: "bold",
    color: ownerState.completed || ownerState.active ? "#fff" : "#4caf50",
    backgroundColor:
        ownerState.completed || ownerState.active ? "#4caf50" : "transparent",
    border:
        ownerState.completed || ownerState.active
            ? "none"
            : "2px dashed #4caf50",
}));

function CustomStepIcon(props) {
    const { active, completed, icon } = props;

    return (
        <StepIconContainer ownerState={{ active, completed }}>
            {completed ? <Check /> : icon}
        </StepIconContainer>
    );
}

const OrderStatusStepper = () => {
    return (
        <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<CustomConnector />}
        >
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={CustomStepIcon}>
                        <span
                            style={{
                                fontWeight:
                                    index === activeStep ? "bold" : "normal",
                            }}
                        >
                            {label}
                        </span>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
