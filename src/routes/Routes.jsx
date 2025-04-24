import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTutorials from "../pages/AddTutorials";
import FindTutors from "../pages/FindTutors";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutorials from "../pages/MyBookedTutorials";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
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
            element:<MyTutorials></MyTutorials>
        },
        {
            path:'/my-booked-tutors/:email',
            element:<MyBookedTutorials></MyBookedTutorials>
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