import { useState } from "react";

const useToken = () => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const saveToken = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const deleteToken = () => {
        localStorage.removeItem("token");
        setToken("");
    };

    return [token, saveToken, deleteToken];
};

export default useToken;
