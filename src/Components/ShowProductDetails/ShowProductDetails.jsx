import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
export default function ShowProductDetails() {
  //  const {_id} = useParams();
    const [product,setProduct] = useState({})
    const params = useLoaderData();
    const _id = params._id;
   useEffect(()=>{
     fetch(`https://clothes-shop-iqis.onrender.com/viewdetails/${_id}`)
     .then(data=>data.json())
     .then(res=>setProduct(res))
     .catch(err=>console.log(err.message))
  

   },[])
   const {imageUrl,brandName,description,productName,productType,ratings,price}=product;



   // add cart item in database
const addToCart = () => {
     fetch("https://clothes-shop-iqis.onrender.com/addToCart",{
         method : "POST",
         headers : {
             "content-type" :"application/json"
         },
         body : JSON.stringify({...product,item:"1"})
     })
     .then(data=>data.json())
     .then(res=>Swal.fire({
        title: 'Success',
        text: 'Item added Successfully in Cart',
        icon: 'success',
        confirmButtonText: 'Cool'
      }))
     .catch(err=>Swal.fire({
        title: 'error',
        text: 'Item already in cart',
        icon: 'error',
        confirmButtonText: 'Cool'
      }))
       
}
 
  return (
    <div >
       <section className="p-6 dark:bg-gray-100 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
    <img src={imageUrl}alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500 h-[550px]" />
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-200">
			<span className="block mb-2 dark:text-black text-md">{brandName}</span>
			<h1 className="text-3xl font-extrabold dark:text-black">{productName}</h1>
			<p className="my-4">
				<span className="font-medium dark:text-black">{description}</span>
			</p>
			<p className="my-4">
				<span className="font-medium dark:text-black">ProductType : {productType}</span>
			</p>
            <p className="my-4">
				<span className="font-medium dark:text-black">Price : {price} euro</span>
			</p>
            <p className="my-4">
				<span className="font-medium dark:text-black">ratings : {ratings}</span>
			</p>
            <button type="button" onClick={addToCart} className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-white bg-gray-500">Add to Cart</button>
		</div>
	
	</div>
</section>




    </div>
  )
}
