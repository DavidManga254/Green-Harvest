import { toast, Id } from "react-toastify";

const displayNotification = (
    message: string,
    type: "success" | "error" | "loading" | "update",
    toastId?: Id,
): Id | void => {
    const options = {
        position: "top-center" as const,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored" as const,
    };

    if (type === "success") {
        return toast.success(message, options);
    } else if (type === "error") {
        return toast.error(message, options);
    } else if (type === "loading") {
        return toast.loading(message, {
            ...options,
            autoClose: false,
            isLoading: true,
        });
    } else if (type === "update" && toastId) {
        return toast.update(toastId, {
            ...options,
            render: message,
            isLoading: false,
            autoClose: 2000,
            type: "success",
        });
    }
};
export default displayNotification;
