import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/withCommonLayout/MainLayout";
import Home from "../layouts/withCommonLayout/pages/(home)/Home";
import SignUp from "../layouts/withCommonLayout/pages/(signUp)/SignUp";
import SignIn from "../layouts/withCommonLayout/pages/(signIn)/SignIn";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import GiftCatalog from "../layouts/withCommonLayout/pages/gift catalog/GiftCatalog";
import Profile from "../layouts/dashboardLayout/Pages/shared/Profile";
import MakeGiftLayout from "../layouts/MakeGiftLayout/MakeGiftLayout";
import SelectTheme from "../layouts/withCommonLayout/pages/makeGift/SelectTheme";
import SelectText from "../layouts/withCommonLayout/pages/makeGift/SelectText";
import UploadMedia from "../layouts/withCommonLayout/pages/makeGift/UploadMedia";
import MusicAndEffects from "../layouts/withCommonLayout/pages/makeGift/MusicAndEffects";

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
        element: <GiftCatalog></GiftCatalog>,
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
    ],
  },
]);

export default router;
