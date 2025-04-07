import { createFileRoute } from "@tanstack/react-router";
import MapExplorePage from "../../../pages/explore";

export const Route = createFileRoute("/(user)/explore/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <MapExplorePage />;
}
