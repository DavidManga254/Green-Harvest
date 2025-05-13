import { createFileRoute } from "@tanstack/react-router";
import SubscriptionsPage from "../../../../pages/account/Subscriptions";

export const Route = createFileRoute("/(user)/account/my-subscriptions/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <SubscriptionsPage />;
}
