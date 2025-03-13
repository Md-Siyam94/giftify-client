
import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/(home)/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   Todo: make error component
    //   errorElement: <div>Error</div>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
    },
  ]);

  export default router