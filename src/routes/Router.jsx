import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layouts/withCommonLayout/MainLayout";
import Home from '../layouts/withCommonLayout/pages/(home)/Home'
import SignUp from '../layouts/withCommonLayout/pages/(signUp)/SignUp'
import SignIn from '../layouts/withCommonLayout/pages/(signIn)/SignIn'
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import MakeGift from "../layouts/withCommonLayout/pages/makeGift/MakeGift";
import GiftCatalog from "../layouts/withCommonLayout/pages/gift catalog/GiftCatalog";
import Profile from "../layouts/dashboardLayout/Pages/shared/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    //   Todo: make error
    //   errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: "/make-gift",
        element: <MakeGift></MakeGift>
      },
      {
        path: "/gift-catalog",
        element: <GiftCatalog></GiftCatalog>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>,
      },

    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    // ToDo: seterror
    // errorElement: <>error</>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>
      },


      
    ]

  }

]);

export default router;