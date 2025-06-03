import { createFileRoute } from "@tanstack/react-router";
import SignupStepper from "../../../pages/sign-up";

export const Route = createFileRoute("/(user)/sign-up/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <SignupStepper />;
}
