import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import ShowProduct from "./ShowProduct";
import Advertisement from "../Advertisement/Advertisement";
import noProductFound from "../../../public/Animation - 1698835746643.json";
export default function ShowBrandProduct() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const { brand_name } = useParams();
  
  useEffect(() => {
    fetch(`https://clothes-shop-itwb.onrender.com/brands/${brand_name}`)
      .then((data) => data.json())
      .then((res) => setProduct(res))
      .catch((err) => setError(err));
  }, [brand_name]);

  
  return (
    <div>
      {product.length > 0 && <Advertisement />}
      {product.length > 0 && (
        <h1 className="text-center m-8 text-3xl">Products.......</h1>
      )}
      {product.length === 0 ? (
        <div className="w-[500px] h-[500px] mx-auto">
          <Lottie
            animationData={noProductFound}
            loop={true}
            height={400}
            width={400}
          />
          <h3 className="text-2xl text-center text-red-700">Opps No Product Found In This Store</h3>
        </div>
        
      ) : (
        <div className="flex justify-center flex-wrap md:justify-normal gap-4">
          {product?.map((product, id) => (
            <ShowProduct key={id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
