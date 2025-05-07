import {Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if(!isAuthenticated){
    return (
        <Navigate 
          to="/login" 
          replace
          state={{ from: location.pathname, message: "Please login to access this page." }}
        />
      );
  }

  return children ;
}

export default ProtectedRoute;