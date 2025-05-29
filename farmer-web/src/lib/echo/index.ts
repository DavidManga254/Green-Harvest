import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Message from "../../api/Message";

(window as any).Pusher = Pusher;

(window as any).Pusher.logToConsole = true;

let cachedEcho: Echo | null = null;

const initEcho = async () => {
    if (cachedEcho) return cachedEcho;

    const chatToken = await Message.getValidChatToken();

    const echo = new Echo({
        broadcaster: "pusher",
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
        forceTLS: false,
        authEndpoint: `${
            import.meta.env.VITE_BASE_BACKEND_URL
        }/broadcasting/auth`,
        auth: {
            headers: {
                Authorization: `Bearer ${chatToken}`,
            },
        },
    });

    cachedEcho = echo;

    return echo;
};

export const useEcho = () => {
    const [echo, setEcho] = useState(null);

    useEffect(() => {
        let mounted = true;

        initEcho().then((e) => {
            if (mounted) setEcho(e);
        });

        return () => {
            mounted = false;
        };
    }, []);

    return echo;
};
