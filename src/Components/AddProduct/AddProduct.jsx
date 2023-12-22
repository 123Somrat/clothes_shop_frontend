import Swal from 'sweetalert2'



export default function AddProduct() {
  const handleSubmit= (e)=>{
       e.preventDefault()
     const form = e.target;
     const productName = form.productName.value;
     const brandName = form.brandName.value;
     const imageUrl = form.url.value;
     const productType = form.productType.value;
     const price = form.price.value;
     const description = form.description.value;
     const ratings = form.ratings.value

     // product
     const Product = {
          productName,
          brandName,
          imageUrl,
          productType,
          price,
          description,
          ratings
     }
     // send data in backEnd 
   
        fetch("https://clothes-shop-iqis.onrender.com/products",{
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body :JSON.stringify(Product)
        })
        .then(data=>data.json())
        .then(res=>Swal.fire({
            title: 'Success',
            text: 'Item added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          }))
        .catch(error=>console.log(error.message))

     
        console.log("somrat")



    }




  return (
    <div>
        <section className="p-6 dark:text-gray-100">
	<form onSubmit={handleSubmit}  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-100">
		<h2 className="w-full text-3xl font-bold leadi text-black">Add Product</h2>
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
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-gray-200 focus:ri hover:ri dark:text-gray-900">Add Product</button>
		</div>
	</form>
</section>
    </div>
  )
}
