import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayOuts from "../MainLayOuts/MainLayOuts";
import Banner from "../Components/Banner/Banner";
import Home from "../Components/Home/Home";
const  ShowBrandProducts  = lazy(()=>import( "../Components/ShowBrandProduct/ShowBrandProducts"));
const  AddProduct =  lazy(()=>import("../Components/AddProduct/AddProduct"));
const  ShowProductDetails = lazy(()=>import("../Components/ShowProductDetails/ShowProductDetails"));
const  CartItems = lazy(()=>import("../Components/CartItems/CartItems"));
const  Register = lazy(()=>import("../Pages/Register/Register"));
const Login = lazy(()=>import("../Pages/Login/Login"));
const PrivateRoute =lazy(()=>import("../PrivateRoute/PrivateRoute"));
const NotFound =  lazy(()=>import("../Components/NotFound/NotFound"));
const UpdateItem =lazy(()=>import("../UpdateItem/UpdateItem")) ;
const Checkout = lazy(()=>import("../Pages/Checkout/Checkout"));


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
          path:"/brands/:brand_name",
          element :<ShowBrandProducts/>,
          loader:({params})=>params
        },
        {
          path:"/viewdetails/:_id",
          element:<PrivateRoute><ShowProductDetails/></PrivateRoute>,
          loader:({params})=>params
        },
        {
          path:"/addProduct",
          element:<PrivateRoute><AddProduct/></PrivateRoute>
        },
        {
          path :"/cartItems",
          element :<PrivateRoute><CartItems/></PrivateRoute> ,
         
        },
        {
          path:"/update/:id",
          element:<PrivateRoute><UpdateItem/></PrivateRoute>,
          loader:({params})=>params
        },
        {
          path:"/checkout",
          element :<Checkout/>
        },
        {
          path: "/*",
          element:<NotFound/>
        },
        
      ],
      
    },
  
  ]);


  export default router;