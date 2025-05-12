import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../../../pages/about";

export const Route = createFileRoute("/(user)/about/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <AboutPage />;
}
