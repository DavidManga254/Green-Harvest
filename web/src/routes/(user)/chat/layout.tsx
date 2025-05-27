import { createFileRoute, Outlet } from "@tanstack/react-router";
import ChatSidebar from "../../../pages/Chat/ChatSiderbar";

export const Route = createFileRoute("/(user)/chat")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <ChatSidebar />
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
}
