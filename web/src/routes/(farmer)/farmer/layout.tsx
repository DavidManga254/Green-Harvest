import { createRootRoute, Outlet } from "@tanstack/react-router";
import FarmerWrapper from "../../../pages/farmer/farmerWrapper";

export const Route = createRootRoute({
    component: () => (
        <FarmerWrapper>
            <Outlet></Outlet>
        </FarmerWrapper>
    ),
});
