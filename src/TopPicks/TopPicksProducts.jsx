import { useEffect, useState } from 'react'
import TopPicksProduct from './TopPicksProduct'


export default function TopPicksProducts() {

  const [topPicksProduct,setTopPicksProduct] = useState([])

  // fetch top picks product from external file
     useEffect(()=>{
          fetch( "../../public/topPicksProduct.json")
          .then(res=>res.json())
          .then(data=>setTopPicksProduct(data))
          .catch(err=>console.log(err))
     },[])

  
  return (
    <div>
     <h1 className='text-3xl m-4'>Top Picks</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-[10px]'>
     {
        topPicksProduct.map((product,id)=><TopPicksProduct
         key = {id}
         product = {product}
        />)
       }
     </div>
     
    </div>
  )
}
