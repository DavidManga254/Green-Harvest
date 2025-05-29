import AxiosApi from "..";

// src/api/Chat.ts
export const ChatApi = {
    getChatsForFarmer: async () => {
        const res = await AxiosApi.get("/chats/farmer");
        return res.data.data;
    },

    getChatMessages: async (chatId: string | number) => {
        const res = await AxiosApi.get(`/chats/farmer/${chatId}/messages`);
        return res.data;
    },

    sendFarmerMessage: async (payload: {
        customer_id: number;
        message: string;
        product_id?: number;
    }) => {
        const res = await AxiosApi.post("/messages/farmer/store", payload);
        return res.data;
    },
};
