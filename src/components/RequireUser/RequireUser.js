import { useContext } from "react";
import { Navigate } from "react-router";
import { SessionContext } from "../SessionContext/SessionContext";

function RequireUser({ children }) {
  const { user } = useContext(SessionContext);

  return user ? children : <Navigate to="/" replace />;
}

export default RequireUser;
