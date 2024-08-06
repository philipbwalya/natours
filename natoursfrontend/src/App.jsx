import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tours from "./pages/Tours";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
