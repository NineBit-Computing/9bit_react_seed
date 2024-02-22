import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { NotFoundPage } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);