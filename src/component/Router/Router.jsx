import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DonationDetails from "../DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/donationDetails/:id',
                element:<DonationDetails></DonationDetails>,
                loader:()=>fetch('../../../public/donetsInfo.json')
            }
        ]
    }
])
export default router