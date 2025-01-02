import axios from "axios";

const AxiosApi = axios.create({
    baseURL: process.env.BACKEND_URL,
    timeout: 10000,
    headers: { Accept: "application/json" },
});

AxiosApi.interceptors.request.use(
    (config) => {
        console.log("Request made with config: ", config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

AxiosApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ECONNABORTED") {
            console.error("Request timeout, please try again later.");
        }
        return Promise.reject(error);
    },
);

export default AxiosApi;
