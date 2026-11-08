import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router";
import { auth } from "../firebase";

const PrivateRoutes = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>User loading data...</p>;

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
