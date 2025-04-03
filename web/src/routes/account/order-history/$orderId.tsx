import { createFileRoute, useParams } from "@tanstack/react-router";
import OrderDetailsPage from "../../../pages/account/orderHistory/OrderDetails";

export const Route = createFileRoute("/account/order-history/$orderId")({
    component: RouteComponent,
});

function RouteComponent() {
    const { orderId } = useParams({ strict: false });

    return <OrderDetailsPage orderId={orderId} />;
}
