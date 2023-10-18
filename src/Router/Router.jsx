import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../MainLayOuts/MainLayOuts";
import Banner from "../Components/Banner/Banner";
import Home from "../Components/Home/Home";
import ShowBrandProducts from "../Components/ShowBrandProduct/ShowBrandProducts";
import AddProduct from "../Components/AddProduct/AddProduct";
import ShowProductDetails from "../Components/ShowProductDetails/ShowProductDetails";


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
          element :<ShowBrandProducts/>
        },
        {
          path:"/viewdetails/:_id",
          element:<ShowProductDetails/>,
          //loader:({params})=>fetch(`http://localhost:3000/viewdetails/${params._id}`)
        },
        {
          path:"/addProduct",
          element:<AddProduct/>
        }
      ]
    },
  ]);


  export default router;