import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layouts/withCommonLayout/MainLayout";
import Home from '../layouts/withCommonLayout/pages/(home)/Home'
import SignUp from '../layouts/withCommonLayout/pages/(signUp)/SignUp'
import SignIn from '../layouts/withCommonLayout/pages/(signIn)/SignIn'


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
        // errorElement: <div>error</div>

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
]);

export default router