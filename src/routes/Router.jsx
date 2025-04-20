
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/withCommonLayout/MainLayout";
import Home from "../layouts/withCommonLayout/pages/(home)/Home";
import SignUp from "../layouts/withCommonLayout/pages/(signUp)/SignUp";
import SignIn from "../layouts/withCommonLayout/pages/(signIn)/SignIn";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import GiftCatalog from "../layouts/withCommonLayout/pages/gift catalog/GiftCatalog";
import MakeGiftLayout from "../layouts/MakeGiftLayout/MakeGiftLayout";
import SelectTheme from "../layouts/withCommonLayout/pages/makeGift/SelectTheme";
import SelectText from "../layouts/withCommonLayout/pages/makeGift/SelectText";
import UploadMedia from "../layouts/withCommonLayout/pages/makeGift/UploadMedia";
import MusicAndEffects from "../layouts/withCommonLayout/pages/makeGift/MusicAndEffects";
import Profile from "../layouts/shared/Profile";
import AdminDashboard from "../layouts/dashboardLayout/Pages/Admin/AdminDashboard/AdminDashboard";
import Analytics from "../layouts/dashboardLayout/Pages/Admin/Analytics/Analytics";
import AddGifts from "../layouts/dashboardLayout/Pages/Admin/AddGifts/AddGifts";
import PrivateRoute from "./PrivateRoute";
import GiftGallery from "../layouts/withCommonLayout/pages/GiftGallery/GiftGallery";
import AboutUs from "../layouts/withCommonLayout/pages/AboutUs/AboutUs";
import Cart from "../layouts/withCommonLayout/pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    //   Todo: make error
    //   errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/make-gift",
        element: <MakeGiftLayout></MakeGiftLayout>,
        children: [
          {
            path: "/make-gift",
            element: <SelectTheme></SelectTheme>,
          },
          {
            path: "/make-gift/select-theme",
            element: <SelectTheme></SelectTheme>,
          },
          {
            path: "/make-gift/select-text",
            element: <SelectText />,
          },
          {
            path: '/make-gift/select-upload-media',
            element: <UploadMedia></UploadMedia>
          },
          {
            path: '/make-gift/select-music-effects',
            element: <MusicAndEffects></MusicAndEffects>
          }
        ],
      },
      {
        path: "/gift-catalog",
        element: <PrivateRoute><GiftCatalog></GiftCatalog></PrivateRoute>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path: "gift_gallery",
        element: <GiftGallery></GiftGallery>
      },
      {
        path: "about_us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    // ToDo: seterror
    // errorElement: <>error</>,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/admin_dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/dashboard/add_gifts",
        element: <AddGifts></AddGifts>,
      },
    ],
  },
]);

export default router;
