import {useEffect, useState }from "react";
import { Link } from "react-router-dom";

export default function CartCalculstion({cartProduct,count}) {
    const [price,setPrice] = useState(0)

// calculating cart product price
useEffect(()=>{
  
    cartProduct.reduce((prev,cur)=>{

      const total =  prev + Number(cur.price*cur.item)
       
         setPrice(total)
  
       return  total
    },0)
   
},[cartProduct,count])
 




  return (
    <div className="w-full p-4 md:w-3/12">
      <h1 className="text-2xl">Summary</h1>
      <section className=" dark:text-black">
        <div className="space-y-4">
          <details className="w-full" open="">
            <summary className="py-4 focus:outline-none focus-visible:ri">
              Do you have a promo code?
            </summary>
            <div className="flex">
              <input
                type="text"
                name="url"
                id="url"
                className="flex  border sm:text-sm rounded-r-md  dark:border-gray-700 dark:text-black-100 w-[180px] mr-2 mb-2"
              />
              <button
                type="button"
                className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 mb-2"
              >
                Apply
              </button>
            </div>
          </details>
        </div>
      </section>
      <div className="divide-y">
      <div className="flex justify-between py-2">
         <p className="text-md">Subtotal</p>
         <p>€{price}</p>
      </div>
      <div className="flex justify-between py-2">
         <p className="text-md">Estimated shipping and handling</p>
         <p>For</p>
      </div>
      <div className="flex justify-between py-2">
         <p className="text-md">costs</p>
         <p>{price >100 ? "Free" : "5€"}</p>
      </div>
      <div className="flex justify-between py-2">
         <p className="text-md">In  total</p>
         <p>{price}€</p>
      </div>
      <div>
      <Link to={"/checkout"}><button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-600 dark:text-white w-full my-4">Checkout</button></Link>
      </div>
      </div>

    </div>
  );
}
