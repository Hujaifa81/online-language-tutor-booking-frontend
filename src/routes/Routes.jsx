import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import MyTutors from "../pages/MyTutors";
import MyBookedTutors from "../pages/MyBookedTutors";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../pages/PrivateRoute";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import AddTutor from "../pages/AddTutor";
import TutorDetails from "../pages/TutorDetails";


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
            path:'/add-tutor',
            element:<AddTutor></AddTutor>
        },
        {
            path:'/find-tutors',
            element:<FindTutors></FindTutors>
        },
        {
            path:'/my-tutors',
            element:<PrivateRoute><MyTutors></MyTutors></PrivateRoute>
        },
        {
            path:'/tutor/details/:id',
            element:<PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>
        },
        {
            path:'/my-booked-tutors',
            element:<PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
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