import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CartCalculstion from "./CartCalculstion";
import { useEffect,useState} from "react";

export default function CartItem({ product, datas, items }) {
  const { _id, imageUrl, brandName, productName, price } = product;
  const [item,setItem] = useState(1)
  const [productPrice,setProductPrice] = useState(0)
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:3000/deleteitem/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedcount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
            const remainingProduct = datas.filter((data) => data._id !== id);
            items(remainingProduct);
          });
      }
    });
  };

  const productCount = (e) =>{
    const item = e.target.value;
    setItem(item)
    setProductPrice(item*price)
    
    fetch(`https://clothes-shop-itwb.onrender.com/cartItems/${_id}`,{
       method:"post",
       headers :{
         "content-type" : "application/json"
       },
       body : JSON.stringify({item})
    })     
      
  } 

  return (
    <div>
      <div className="flex flex-col  space-y-2 max-w-2xl p-4  sm:p-8  dark:text-black-100 ">
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4 h-[80px]">
              <img
                className="flex-shrink-0 object-cover w-12 h-12 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={imageUrl}
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                      {productName}
                    </h3>
                    <p className="text-sm dark:text-gray-400">{brandName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{item*price}€</p>
                  </div>
                </div>
                <div>
                 Size <select className="bg-gray-100 outline-none border-none mr-2 mb-2">
                    <option>42</option>
                    <option>42.5</option>
                    <option>43</option>
                    <option>43.5</option>
                    <option>44</option>
                  </select>

                 Crowd <select className="bg-gray-100 outline-none border-none mb-2" value={item} onChange={productCount}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1 mb-2"
                    onClick={() => deleteItem(_id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex ">
                   <p className="mr-4">Free pickUp</p>
                   <Link className="underline">Seach Store</Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
