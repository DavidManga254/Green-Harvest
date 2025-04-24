import { createFileRoute } from "@tanstack/react-router";
import ConfirmPaymentPage from "../../../../../pages/checkout/pay/callback";

export const Route = createFileRoute("/(user)/checkout/pay/callback/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { reference } = Route.useSearch();

    return <ConfirmPaymentPage reference={reference.toString()} />;
}
