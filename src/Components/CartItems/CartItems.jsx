import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartItems() {
  const [data, setData] = useState([]);

  // fetching cart item
  useEffect(() => {
    fetch("http://localhost:3000/cartItems")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

 console.log(data.length)
  return (
    <div>
      <h1 className="text-3xl my-4">Cart Items</h1>
      {data.length===0 ? <h1 className="text-5xl text-center my-24">No Item in cart</h1> 
       :
        <div className="grid grid-cols-3 gap-4">
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
    
      }
    </div>
  );
}
