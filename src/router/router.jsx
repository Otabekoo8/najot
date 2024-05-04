import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Monitoring from "../Pages/Monitoring/Monitoring";

import Login from "../Pages/Login/Login";
import Header from "../Components/Header/Header";
import Admin from "../Pages/Admin/Admin";
import Xabarlar from "../Pages/Xabarlar/Xabarlar";
import Tizim from "../Pages/Tizim/Tizim";
    // import Elektron from "../Pages/Elektron/Elektron";


const router = createBrowserRouter([ 
    {
        path: "/",
        element: <Header />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/kirish",
                element: <Monitoring />,
            },
            {
                path: "/ma'lumot",
                element: <Admin />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/xabarlar",
                element: <Xabarlar />
            },
            {
                path: "/tizim",
                element: <Tizim />
            },
            
       
        ]
    },

]);

export default router;