import { createFileRoute } from "@tanstack/react-router";
import RegisterPage from "../../../pages/register";

export const Route = createFileRoute("/(user)/register/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <RegisterPage />;
}
