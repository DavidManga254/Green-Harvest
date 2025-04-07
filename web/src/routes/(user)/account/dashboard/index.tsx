import { createFileRoute } from "@tanstack/react-router";
import DashboardPage from "../../../../pages/account/dashboard";

export const Route = createFileRoute("/(user)/account/dashboard/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <DashboardPage />;
}
