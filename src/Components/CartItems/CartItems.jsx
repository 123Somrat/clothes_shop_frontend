import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Providers";

export default function CartItems() {
  const [data, setData] = useState([]);

  // fetching cart item
  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div>
      <h1>sam</h1>
    </div>
  );
}
