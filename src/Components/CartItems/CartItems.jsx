import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartCalculstion from "./CartCalculstion";

export default function CartItems() {
  const [data, setData] = useState([]);

  // fetching cart item
  useEffect(() => {
    fetch("http://localhost:3000/cartItems")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
     <div className="border-2 p-2 w-[670px] my-2">
      <h1 className="text-xl text-red-500 py-2">Free shipping for members.</h1>
      <p className="text-gray-700">Become a Nike Member to enjoy fast, free shipping.Be there or <Link to={"/register"} className="underline">register </Link>   </p>
     </div>

      <h1 className="text-3xl my-4">Shopping Cart</h1>
      {data.length===0 ? <h1 className="text-5xl text-center my-24">No Item in cart</h1> 
       :
       <div className="flex-cols md:flex lg:flex gap-4 max-w-6xl">
        <div className="grid grid-cols-1 gap-4 w-7/12">
       {
       data.map((product, id) => (
        <CartItem key={id} 
        product={product} 
        datas={data}
        items = {setData}
        />
      ))
       }
      </div>
        <CartCalculstion/>
        </div>
      }
      
    </div>
  );
}
