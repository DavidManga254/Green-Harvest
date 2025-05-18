import { createFileRoute } from "@tanstack/react-router";
import SearchResultPage from "../../../../pages/search-results";

export const Route = createFileRoute("/(user)/product/search-results/")({
    component: RouteComponent,
    validateSearch: (search) => ({
        query: typeof search.query === "string" ? search.query : "",
        page: search.page ? Number(search.page) : 1,
        category:
            typeof search.category === "string" ? search.category : undefined,
        available: search.available === "true",
        on_sale: search.on_sale === "true",
    }),
});

function RouteComponent() {
    const search = Route.useSearch();

    return (
        <SearchResultPage
            query={search.query}
            page={search.page}
            category={search.category}
            available={search.available}
            on_sale={search.on_sale}
        />
    );
}
