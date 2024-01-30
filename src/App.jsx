import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Main from "./layout/Main";
import MainLayout from "./layout/Layout";
import Card from "./components/card/Card";
import Header from "./layout/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-slate-50 h-full">
        <Header />
        <Outlet></Outlet>
      </div>
    ),
    children: [
      {
        path: ":id",
        element: (
          <>
            <Outlet></Outlet>
            <Main />
          </>
        ),
        children: [
          {
            path: ":id",
            element: <Card />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
