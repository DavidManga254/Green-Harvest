import { createFileRoute } from "@tanstack/react-router";
import FarmerDashboard from "../../../../pages/farmer/dashboard";

export const Route = createFileRoute("/(farmer)/farmer/dashboard/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <FarmerDashboard />;
}
