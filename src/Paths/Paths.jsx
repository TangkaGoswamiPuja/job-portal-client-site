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
import Private from "../Authfile/Private";
import Details from "../Pages/Details";



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
            path : '/details/:id',
            element:<Private><Details></Details></Private>,
            loader: ()=>fetch('http://localhost:5000/allJobs')

        },
        {
            path:'/appliedjobs',
            element:<Private><Applyjob></Applyjob></Private>
        },
        {
            path:'/addjob',
            element:<Private><Add></Add></Private>
        },
        
        {
            path:'/myjob',
            element:<Private><MyJob></MyJob></Private>
        },
        {
            path:'/blogs',
            element:<Private><Blog></Blog></Private>
        },
        {
            path:'/profile',
            element:<Private><Profile></Profile></Private>
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