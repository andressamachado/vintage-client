import { useContext } from "react";
import { Navigate } from "react-router";
import { SessionContext } from "../SessionContext/SessionContext";

function RequireUserAdmin({ children }) {
  const { user } = useContext(SessionContext);

  return user?.isAdmin ? children : <Navigate to="/" replace />;
}

export default RequireUserAdmin;
