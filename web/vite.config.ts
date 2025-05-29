import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        TanStackRouterVite({
            routeToken: "layout",
        }),
        viteReact(),
        // ...,
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: "0.0.0.0",
        port: 3005,
    },
});
