import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Earn from "../Pages/Earn/Earn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/earn',
            element: <Earn/>
        },
      ]
    },
  ]);

export default router;