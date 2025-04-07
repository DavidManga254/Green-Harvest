import { createFileRoute } from "@tanstack/react-router";
import OrderHistoryPage from "../../../../pages/account/orderHistory";

export const Route = createFileRoute("/(user)/account/order-history/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <OrderHistoryPage />;
}
