import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuthContext = () => {
    return (
        useContext(AuthContext)
    );
};

export default useAuthContext;