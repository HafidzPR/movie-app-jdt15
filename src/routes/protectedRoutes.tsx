import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoutes: React.FC = () => {
  const { pathname } = useLocation();

  const token = "";

  const authProtected = ["/login"];
  const tokenProtected = ["/admin"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/admin" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
