import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import SInglePhone from "../pages/SInglePhone";
import AllPhones from "../pages/AllPhones";
import Error10 from "../pages/ErrorPage";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/phone/:id",
                loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`),
                element: <SInglePhone></SInglePhone>
            },
            {
                path: "/all-products",
                element: <AllPhones></AllPhones>

            }
        ]
    },
    {
        path: "*",
        element: <Error10></Error10>
    }
])

export default MainRoute;