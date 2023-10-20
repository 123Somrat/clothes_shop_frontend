import Swal from 'sweetalert2'

export default function CartItem({ product ,datas,items}) {
  const { _id,imageUrl, brandName, productName } = product;
  
   const deleteItem  = (id) =>{
   
     Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((res) => {
        if (res.isConfirmed) {
         
          fetch(`http://localhost:3000/deleteitem/${id}`,{
            method : "delete"
          })
           .then(res=>res.json())
           .then(data=>{
                if(data.deletedcount>0){
                    Swal.fire(
                          'Deleted!',
                         'Your item has been deleted.',
                          'success'
                       )   

                }
                const remainingProduct = datas.filter(data=>data._id !== id);
                 items(remainingProduct)
           })



        }
      })
   }

   /*


       .then(res=>




   */
  return (
    <div>
      <div className="w-[370px] p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-50">
        <img
          src={imageUrl}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-md font-medium tracki uppercase dark:text-black">
            {brandName}
          </span>
        </div>
        <p className="dark:text-gray-500 mb-4">{productName}</p>
        <div>
          <button
            type="button"
            className="px-8 py-3 font-semibold border rounded dark:border-gray-400 dark:text-black"
            onClick={()=>deleteItem(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
