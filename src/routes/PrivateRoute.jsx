import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { ClipLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <ClipLoader color='#08a5eb' />;
  } else if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
