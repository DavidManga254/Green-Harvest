import { createFileRoute, Outlet } from "@tanstack/react-router";
import AccountLayout from "../../pages/account/layout";

export const Route = createFileRoute("/account")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <AccountLayout>
            <Outlet />
        </AccountLayout>
    );
}
