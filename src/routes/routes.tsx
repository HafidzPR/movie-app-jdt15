import { createBrowserRouter } from "react-router";

import Layout from "../layout";

import ProtectedRoutes from "./protectedRoutes";
import Admin from "../pages/pages/admin";
import Detail from "../pages/pages/detail/detail";
import Home from "../pages/pages/home/home";
import Login from "../login/login";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <Admin />,
        path: "/admin",
      },
      {
        element: <Login />,
        path: "/login",
      },
    ],
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Detail />,
        path: "/detail",
      },
    ],
  },
]);
