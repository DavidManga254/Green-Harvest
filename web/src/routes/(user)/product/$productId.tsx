import { createFileRoute } from "@tanstack/react-router";
import ProductDetailPage from "../../../pages/ProductDetail/ProductDetail";

export const Route = createFileRoute("/(user)/product/$productId")({
    component: RouteComponent,
});

function RouteComponent() {
    const { productId } = Route.useParams();

    return <ProductDetailPage productId={parseInt(productId)} />;
}
