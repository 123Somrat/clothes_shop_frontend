import React from 'react'

export default function TopPicksProduct({product}) {
   // const {brand,product,imageURL,price} = product
  return (
    <div>
     <div  className="w-[370px] p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-50">
            <img src={product.imageURL} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-md font-medium tracki uppercase dark:text-black">{product?.product}</span>
            </div>
            <p className="dark:text-gray-500">{product?.price} €</p>
        </div>


    </div>
  )
}
