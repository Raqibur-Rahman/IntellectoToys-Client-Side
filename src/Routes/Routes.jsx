import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import AboutUs from "../pages/About/AboutUs";
import ToyDetails from "../pages/Home/Home/AllToys/ToyDetails";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import AllToysInTable from "../pages/AllToys/AllToysInTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      }
      ,
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
      ,
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      }
      ,
      {
        path: '/toys/:id',
        element: <PrivateRoutes><ToyDetails ></ToyDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://intellecto-toys-server.vercel.app/toys/${params.id}`)
      }
      ,
      {
        path: '/alltoys',
        element: <AllToysInTable></AllToysInTable>
      }
      ,
      {
        path: '/mytoys',
        element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
      }
      ,
      {
        path: '/addtoy',
        element: <PrivateRoutes>
          <AddToy></AddToy>
        </PrivateRoutes>
      }

    ]
  }
  ,
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;