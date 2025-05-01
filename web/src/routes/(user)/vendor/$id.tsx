import { createFileRoute } from "@tanstack/react-router";
import VendorPage from "../../../pages/vendor";

export const Route = createFileRoute("/(user)/vendor/$id")({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();

    return <VendorPage id={id} />;
}
