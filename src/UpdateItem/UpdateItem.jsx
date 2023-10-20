import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function UpdateItem() {
    const {_id} = useParams()

     useEffect(()=>{
            fetch(`http://localhost:3000/update/${_id}`)
            .then(res=>res.json())
            .then(data=>console.log(data))   
  


     },[])



    console.log(_id)
      const handleSubmit = (e) =>{
           e.preventDefault()
      }



  return (
    <div>
        <section className="p-6 dark:text-gray-100">
	<form onSubmit={handleSubmit}  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-100">
		<h2 className="w-full text-3xl font-bold leadi text-black">Update Product</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1 text-black">Product Name</label>
			<input id="name" type="text" placeholder="Product Name" name="productName" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="brandname" className="block mb-1 ml-1 text-black">Brand Name</label>
			<input id="brandname" type="text" placeholder="Brand Name" name="brandName" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="image" className="block mb-1 ml-1 text-black">Image URL</label>
			<textarea id="image" type="text" placeholder="Image URL..." name="url" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
		</div>
        <div>
			<label htmlFor="type" className="block mb-1 ml-1 text-black">Product type</label>
			<input id="type" type="text" placeholder="Product type" name="productType" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="price" className="block mb-1 ml-1 text-black">Price</label>
			<input id="price" type="number" placeholder="Price" name="price" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
		</div>
		<div>
			<label htmlFor="description" className="block mb-1 ml-1 text-black">Short Description</label>
			<textarea id="description" type="text" placeholder="Description..." name="description" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
		</div>
        <div>
			<label htmlFor="rating" className="block mb-1 ml-1 text-black">Ratings</label>
			<textarea id="rating" type="number" placeholder="Ratings" name="ratings" className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-gray-200 focus:ri hover:ri dark:text-gray-900">Send</button>
		</div>
	</form>
</section>
    </div>
  )
}
