// routes/(farmer)/layout.tsx
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import FarmerWrapper from "./web/src/pages/farmer/farmerWrapper";

export const Route = createFileRoute("/(farmer)/__layout")({
    beforeLoad: async () => {
        const isAuthenticated = true;
        if (!isAuthenticated) {
            throw redirect({ to: "/sign-in" });
        }
    },
    component: FarmerLayout,
});

function FarmerLayout() {
    return (
        <FarmerWrapper>
            <Outlet />
        </FarmerWrapper>
    );
}
