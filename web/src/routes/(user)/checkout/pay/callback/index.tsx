import { createFileRoute } from "@tanstack/react-router";
import ConfirmPaymentPage from "../../../../../pages/checkout/pay/callback";

export const Route = createFileRoute("/(user)/checkout/pay/callback/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { reference, plan_id } = Route.useSearch();

    return (
        <ConfirmPaymentPage
            reference={reference ? reference.toString() : plan_id}
        />
    );
}
