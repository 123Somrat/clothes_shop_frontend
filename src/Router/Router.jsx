import { createBrowserRouter } from "react-router-dom";
import MainLayOuts from "../MainLayOuts/MainLayOuts";
import Banner from "../Components/Banner/Banner";
import Home from "../Components/Home/Home";
import ShowBrandProducts from "../Components/ShowBrandProduct/ShowBrandProducts";
import AddProduct from "../Components/AddProduct/AddProduct";
import ShowProductDetails from "../Components/ShowProductDetails/ShowProductDetails";
import CartItems from "../Components/CartItems/CartItems";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


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
             element:<Register/>
        },
        {
           path:"/login",
           element:<Login/>
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
        },
        {
          path :"/cart",
          element : <CartItems/>,
         
        }
      ]
    },
  ]);


  export default router;