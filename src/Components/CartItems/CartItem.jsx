import React from 'react'

export default function CartItem({product}) {

    const {imageUrl,brandName,productName} = product 
  return (
    <div>
<div  className="w-[370px] p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-50">
            <img src={imageUrl} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-md font-medium tracki uppercase dark:text-black">{brandName}</span>
            </div>
            <p className="dark:text-gray-500 mb-4">{productName}</p>
            <div>
             
                <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-400 dark:text-black">Delete</button>
            </div>
        </div>



    </div>
  )
}
