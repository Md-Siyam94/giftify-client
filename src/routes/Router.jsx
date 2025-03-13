
import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../layouts/withCommonLayout/MainLayout";
import Home from "../layouts/withCommonLayout/pages/(home)/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   Todo: make error
    //   errorElement: <div>Error</div>,
    children: [
        {
            path: '/',
            element: <Home></Home>
            // errorElement: <div>error</div>
            
        }
    ]
    },
  ]);

  export default router