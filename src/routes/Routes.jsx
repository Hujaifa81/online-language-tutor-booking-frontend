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
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

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
        {
            path:'/about-us',
            element:<AboutUs></AboutUs>
        },
        {
            path:'/contact-us',
            element:<ContactUs></ContactUs>
        }
      ]
    },
    {
        path:'/sign-up',
        element:<SignUp></SignUp>
    },
    {
        path:'/sign-in',
        element:<SignIn></SignIn>
    },
    
  ]);