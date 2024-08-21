import { createContext } from "react";
import PropTypes from "prop-types";

import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const AllContent = useFirebase();
    return (
        <AuthContext.Provider value={AllContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
  };