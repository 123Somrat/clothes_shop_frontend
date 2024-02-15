import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://clothes-shop-iqis.onrender.com/deleteAllCartItems", {
      method: "delete",
    })
      .then((res) => res.json())
      .then(
        (data) =>
          data.deletedCount > 0 &&
          Swal.fire("Success", "Your item Placed successfully.", "success")
      );

    // navigate home after checkout product
    navigate("/");
  }, []);
}
