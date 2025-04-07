import { createFileRoute } from "@tanstack/react-router";
import CheckoutPage from "../../../pages/checkout";

export const Route = createFileRoute("/(user)/checkout/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <CheckoutPage />;
}
