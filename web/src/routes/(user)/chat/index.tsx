import { createFileRoute } from "@tanstack/react-router";
import ChatApp from "../../../pages/Chat";

export const Route = createFileRoute("/(user)/chat/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div style={{ padding: 16, color: "#888" }}>
            <h3>Select a chat to begin</h3>
        </div>
    );
}
