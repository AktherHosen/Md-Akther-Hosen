import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>Not found</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
