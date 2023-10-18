import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowProduct from './ShowProduct';

export default function ShowBrandProduct() {
    const [product,setProduct] = useState([])
   const {brand_name} = useParams();
   useEffect(()=>{
    fetch(`http://localhost:3000/${brand_name}`)
    .then(data=>data.json())
    .then(res=>setProduct(res))
    .catch(err=>console.log("somrat"))
   },[])
  

  return (
    <div>
           <h1 className='text-center m-8 text-3xl'>Products.......</h1>
           <div className='flex flex-wrap gap-4'>
           {
             product.map((product,id)=><ShowProduct 
             key={id}
             product= {product}
             />)
           }
           </div>
           
    </div>
  )
}
