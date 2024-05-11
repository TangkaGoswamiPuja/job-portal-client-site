import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Error from "../Pages/Error";
import Profile from "../Pages/Profile";
import Alljob from "../Pages/Alljob";
import Applyjob from "../Pages/Applyjob";
import MyJob from "../Pages/Myjob";
import Blog from "../Pages/Blog";
import Add from "../Pages/Add";
import Login from "../Login/Login";
import Register from "../Login/Register";



 const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error> ,
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/alljobs',
            element:<Alljob></Alljob>
        },
        {
            path:'/appliedjobs',
            element:<Applyjob></Applyjob>
        },
        {
            path:'/addjob',
            element:<Add></Add>
        },
        {
            path:'/myjob',
            element:<MyJob></MyJob>
        },
        {
            path:'/blogs',
            element:<Blog></Blog>
        },
        {
            path:'/profile',
            element:<Profile></Profile>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {path: "/register",
        element:<Register></Register>

        }
        
      ]
    },
  ]);
  export default router