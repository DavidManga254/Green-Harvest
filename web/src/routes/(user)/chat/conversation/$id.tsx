import { createFileRoute } from "@tanstack/react-router";
import ChatWindow from "../../../../pages/Chat/ChatWindow";

export const Route = createFileRoute("/(user)/chat/conversation/$id")({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    const search = Route.useSearch();

    return <ChatWindow product_id={search.product_id} chatId={id} />;
}
