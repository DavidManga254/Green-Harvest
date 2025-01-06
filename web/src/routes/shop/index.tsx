import { createFileRoute } from "@tanstack/react-router";
import ShopPage from "../../pages/Shop/Shop";

export const Route = createFileRoute("/shop/")({
    component: RouteComponent,
    validateSearch: (search) => ({
        page: search.page ? Number(search.page) : undefined,
    }),
});

function RouteComponent() {
    const search = Route.useSearch();

    return <ShopPage page={search.page} />;
}
