import { useEffect,useState } from "react"
import { Link }from"react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Brand() {
   const [brand,setBrand] = useState([])
     useEffect(()=>{
          AOS.init()
         fetch("../../../public/clothesBrand.json")
         .then(data=>data.json())
         .then(res=>setBrand(res))

     },[])
 
   

  return (
    <div >
       <h1 className='text-red text-4xl ml-4 p-4'>Brands...</h1> 
       <div className="grid grid-cols-3 gap-4 my-8">
          {
            brand.map((brand,id)=>(<Link to={`/${brand.brand_name}`}><div className="w-[370px] p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-50">
            <img src={brand.brand_image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-md font-medium tracki uppercase dark:text-black">{brand?.brand_name}</span>
            </div>
            <p className="dark:text-gray-500">{brand?.details}</p>
        </div></Link>))
          }
       </div>
    </div>
  )
}
