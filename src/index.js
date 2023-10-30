import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./pages/Root";
import Band, { loader as bandLoader } from "./pages/Band";
import { loader as bandsLoader } from "./pages/Home";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: bandsLoader,
      },
      {
        path: "bands/:bandId",
        element: <Band />,
        loader: bandLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
