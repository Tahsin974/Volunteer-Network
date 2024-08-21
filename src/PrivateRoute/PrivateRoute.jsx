import PropTypes from "prop-types";
import useAuthContext from "../Context/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  

  if (loading) {

    return  <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-dots loading-lg text-green-500"></span>
  </div>;
  }

  if (user?.email) {
    return children;
  }

 
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
