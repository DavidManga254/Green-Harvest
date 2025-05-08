import { createFileRoute } from "@tanstack/react-router";
import SubscriptionDetailPage from "../../../../../pages/vendor/subscriptions/subscriptionDetail";

export const Route = createFileRoute(
    "/(user)/vendor/subscriptions/subscription-detail/$subscription",
)({
    component: RouteComponent,
});

function RouteComponent() {
    const { subscription } = Route.useParams();

    return <SubscriptionDetailPage subscriptionId={subscription} />;
}
