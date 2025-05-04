import { createFileRoute } from "@tanstack/react-router";
import FindFarmersPage from "../../../pages/find-farmers";

export const Route = createFileRoute("/(user)/find-farmer/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <FindFarmersPage />;
}
