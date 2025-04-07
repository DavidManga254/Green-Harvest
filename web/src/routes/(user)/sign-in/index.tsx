import { createFileRoute } from "@tanstack/react-router";
import SignInPage from "../../../pages/SignIn/SignIn";

export const Route = createFileRoute("/(user)/sign-in/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <SignInPage />;
}
