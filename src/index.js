import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);