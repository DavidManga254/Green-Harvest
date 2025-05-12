import { createFileRoute } from "@tanstack/react-router";
import ContactSection from "../../../pages/contact-us";

export const Route = createFileRoute("/(user)/contact-us/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <ContactSection />;
}
