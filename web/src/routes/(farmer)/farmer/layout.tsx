import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import FarmerWrapper from "../../../pages/farmer/farmerWrapper";

export const Route = createRootRoute({
    beforeLoad: async () => {
        const isAuthenticated = true;
        if (!isAuthenticated) {
            throw redirect({ to: "/sign-in" });
        }
    },
    component: () => (
        <FarmerWrapper>
            <Outlet></Outlet>
        </FarmerWrapper>
    ),
});
