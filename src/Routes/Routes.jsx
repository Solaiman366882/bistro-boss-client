import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../pages/ContactUs/ContactUs";
import Order from "../pages/Order/Order";
import PrivateRoute from "./PrivateRoute";
import DashBoardLayouts from "../Layouts/DashBoardLayouts";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/contact',
                element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><DashBoardLayouts></DashBoardLayouts></PrivateRoute>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }
])

export default router;