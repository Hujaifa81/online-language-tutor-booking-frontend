import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTutorials from "../pages/AddTutorials";
import FindTutors from "../pages/FindTutors";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutorials from "../pages/MyBookedTutorials";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../pages/PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/add-tutorials',
            element:<AddTutorials></AddTutorials>
        },
        {
            path:'find-tutors',
            element:<FindTutors></FindTutors>
        },
        {
            path:'/my-tutorials/:email',
            element:<PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
        },
        {
            path:'/my-booked-tutors/:email',
            element:<PrivateRoute><MyBookedTutorials></MyBookedTutorials></PrivateRoute>
        },
      ]
    },
    {
        path:'/sign-up',
        element:<SignUp></SignUp>
    },
    {
        path:'/sign-in',
        element:<SignIn></SignIn>
    }
  ]);