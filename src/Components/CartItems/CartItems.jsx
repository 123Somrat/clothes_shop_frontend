import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Providers";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartCalculstion from "./CartCalculstion";

export default function CartItems() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  // fetching cart item
  useEffect(() => {
    fetch("https://clothes-shop-iqis.onrender.com/cartItems")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [count]);

  const ProductCount = (productCount) => {
    setCount(productCount);
  };

  return (
    <div>
      <div className="border-2 w-full p-2 md:w-[670px] my-2">
        <h1 className="text-xl text-red-500 py-2">
          Free shipping for members.
        </h1>
        <p className="text-gray-700">
          Become a Nike Member to enjoy fast, free shipping.Be there or{" "}
          <Link to={"/register"} className="underline">
            register{" "}
          </Link>{" "}
        </p>
      </div>

      <h1 className="text-3xl my-4">Shopping Cart</h1>
      {data.length === 0 ? (
        <h1 className="text-5xl text-center my-24">No Item in cart</h1>
      ) : (
        <div className="flex-cols  md:flex lg:flex gap-8 max-w-6xl">
          <div className="grid  grid-cols-1 w-full gap-4 md:w-7/12 divide-y">
            {data.map((product, id) => (
              <CartItem
                key={id}
                product={product}
                datas={data}
                items={setData}
                ProductCount={ProductCount}
              />
            ))}
          </div>
          <CartCalculstion cartProduct={data} count={count} />
        </div>
      )}
    </div>
  );
}
