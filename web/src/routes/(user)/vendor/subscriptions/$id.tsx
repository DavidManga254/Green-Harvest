import { createFileRoute } from "@tanstack/react-router";
import FarmerSubscriptionsPage from "../../../../pages/vendor/subscriptions";

export const Route = createFileRoute("/(user)/vendor/subscriptions/$id")({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();

    return <FarmerSubscriptionsPage farmerId={id} />;
}
