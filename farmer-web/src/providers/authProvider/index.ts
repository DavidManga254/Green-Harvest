import { AuthProvider } from "@refinedev/core";
import AxiosApi from "../../api";

const AUTH_CACHE_KEY = "green-harvest-auth-check";
const AUTH_CACHE_DURATION_MS = 120 * 60 * 1000;

const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        try {
            await AxiosApi.post("/login", { email, password });

            return {
                success: true,
                redirectTo: "/dashboard",
            };
        } catch (error) {
            return {
                success: false,
                error: {
                    name: "LoginError",
                    message: "Invalid credentials",
                },
            };
        }
    },
    check: async () => {
        const cached = localStorage.getItem(AUTH_CACHE_KEY);

        if (cached) {
            console.log("cached found");
            const parsed = JSON.parse(cached);
            const isExpired =
                Date.now() - parsed.timestamp > AUTH_CACHE_DURATION_MS;

            if (!isExpired && parsed.authenticated) {
                return { authenticated: true };
            }
        }

        // fallback to real API check
        try {
            const response = await AxiosApi.get("/farmers/me/check-auth");

            if (response.data.authenticated) {
                localStorage.setItem(
                    AUTH_CACHE_KEY,
                    JSON.stringify({
                        authenticated: true,
                        timestamp: Date.now(),
                    })
                );

                return { authenticated: true };
            }

            return { authenticated: false, redirectTo: "/login" };
        } catch (error) {
            return { authenticated: false, redirectTo: "/login" };
        }
    },
    logout: async () => {
        try {
            // await AxiosApi.post("/logout"); // optional, if your API supports it
        } catch (e) {
            // silently ignore logout API failure
        }

        localStorage.removeItem(AUTH_CACHE_KEY);

        return {
            success: true,
            redirectTo: "/login",
        };
    },
};

export default authProvider;
