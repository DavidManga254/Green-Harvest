import { createFileRoute } from "@tanstack/react-router";
import CheckOutPayPage from "../../../../pages/checkout/pay";

export const Route = createFileRoute("/(user)/checkout/pay/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <CheckOutPayPage />;
}
