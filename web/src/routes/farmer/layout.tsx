import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import FarmerWrapper from "../../pages/farmer/farmerWrapper";

export const Route = createFileRoute("/farmer")({
    beforeLoad: async ({ context }) => {
        const isAuthenticated = true;
        if (!isAuthenticated) {
            throw redirect({
                to: "/sign-in",
            });
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <FarmerWrapper>
            <Outlet />
        </FarmerWrapper>
    );
}
