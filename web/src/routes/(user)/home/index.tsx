import { createFileRoute } from "@tanstack/react-router";
import GreenHarvestPage from "../../../pages/home";

export const Route = createFileRoute("/(user)/home/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <GreenHarvestPage />;
}
