import { createFileRoute } from "@tanstack/react-router";
import MapExplorePage from "../../pages/explore";

export const Route = createFileRoute("/explore/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <MapExplorePage />;
}
