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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../Components/NotFound/NotFound";


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
          element :<ShowBrandProducts/>
        },
        {
          path:"/viewdetails/:_id",
          element:<PrivateRoute><ShowProductDetails/></PrivateRoute>,
          //loader:({params})=>fetch(`http://localhost:3000/viewdetails/${params._id}`)
        },
        {
          path:"/addProduct",
          element:<PrivateRoute><AddProduct/></PrivateRoute>
        },
        {
          path :"/cart",
          element : <CartItems/>,
         
        },
        {
          path: "/*",
          element:<NotFound/>
        },
        
      ],
      
    },
  
  ]);


  export default router;