import { toast } from "react-toastify";

const showToast = (type, message) => {
    const config = {
        position: "top-center",
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }

    switch (type) {
        case "success":
            toast.success(message, config);
            break;
        case "error":
            toast.error(message, config);
            break;
        default:
            toast(message, config);
    }

}

export default showToast