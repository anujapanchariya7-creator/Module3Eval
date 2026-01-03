import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children, role }) => {
  const { isAuth, role: userRole } = useAuth();

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  if (role && userRole !== role) {
    return <Navigate to="/" />;
  }

  return children; // 🔥 THIS LINE IS THE KEY
};

export default PrivateRoute;
