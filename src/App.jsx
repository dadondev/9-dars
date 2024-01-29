import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./layout/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
