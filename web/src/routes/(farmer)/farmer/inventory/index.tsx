import { createFileRoute } from "@tanstack/react-router";
import FarmerInventory from "../../../../pages/farmer/inventory";

export const Route = createFileRoute("/(farmer)/farmer/inventory/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <FarmerInventory />;
}
