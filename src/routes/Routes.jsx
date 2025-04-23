import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTutorials from "../pages/AddTutorials";
import FindTutors from "../pages/FindTutors";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutorials from "../pages/MyBookedTutorials";
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
            path:'/my-tutorials',
            element:<MyTutorials></MyTutorials>
        },
        {
            path:'/my-booked-tutors',
            element:<MyBookedTutorials></MyBookedTutorials>
        },
      ]
    },
  ]);