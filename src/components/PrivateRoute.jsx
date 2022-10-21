import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return <Spinner />;

  if (user) return children;

  return <Navigate to="/login" />;
};

export default PrivateRoute;
