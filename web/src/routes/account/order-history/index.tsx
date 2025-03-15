import { createFileRoute } from "@tanstack/react-router";
import OrderHistoryPage from "../../../pages/account/orderHistory";

export const Route = createFileRoute("/account/order-history/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <OrderHistoryPage />;
}
