import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowProduct from './ShowProduct';

export default function ShowBrandProduct() {
    const [product,setProduct] = useState([])
    const [error,setError] = useState("")
   const {brand_name} = useParams();
   useEffect(()=>{
    fetch(`http://localhost:3000/brands/${brand_name}`)
    .then(data=>data.json())
    .then(res=>setProduct(res))
    .catch(err=>setError(err))
   },[])

   console.log(product)
console.log(error)
  return (
    <div>
          {product.length>0 &&<h1 className='text-center m-8 text-3xl'>Products.......</h1>}
         {product.length===0 ? <h1 className='text-5xl text-black text-center m-12'>Opps Product Not Found..... </h1> : <div className='flex flex-wrap gap-4'>
           {
             product?.map((product,id)=><ShowProduct 
             key={id}
             product= {product}
             />)
           }
           </div>
            }
    </div>
  )
}
