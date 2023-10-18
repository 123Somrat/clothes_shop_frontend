import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../MainLayOuts/MainLayOuts";
import Banner from "../Components/Banner/Banner";
import Home from "../Components/Home/Home";
import ShowBrandProduct from "../Components/ShowBrandProduct/ShowBrandProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOuts/>,
      children : [
        {
             path:'/',
             element:<Home/>
        },
        {
             path:"/register",
             element:<div>register page</div>
        },
        {
          path:"/:brand_name",
          element :<ShowBrandProduct/>
        }
      ]
    },
  ]);


  export default router;