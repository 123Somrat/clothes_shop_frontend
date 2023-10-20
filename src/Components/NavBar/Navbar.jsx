import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SiNike } from "react-icons/si";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AuthContext } from '../../Providers/Providers';

export default function Navbar() {
	const { User,logOut} = useContext(AuthContext)

	// <Link to={"/cart"}><BsFillCartCheckFill className='mr-4 w-8 h-8'/></Link> 
  return (
    <div>
<header className="p-4 dark:bg-gray-100 dark:text-black-100">
	<div className="container flex justify-between h-[30px] mx-auto">
		<Link to={"/"}aria-label="Back to homepage" className="flex items-center p-2">
        <SiNike className="w-12 h-12"/>
		</Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to={"/"} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
			</li>
			<li className="flex">
				<Link to={"/"}className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Men's</Link>
			</li>
			<li className="flex">
				<Link to={"/"}className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Ladies</Link>
			</li>
            <li className="flex">
				<Link to={"/addProduct"} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Add Product</Link>
			</li><li className="flex">
				<Link to={"/cartItems"}className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Cart</Link>
			</li>
		</ul>
		
		<div className="items-center flex-shrink-0 hidden lg:flex">
		    
		    {User && <span className='mr-2'>{User?.email}</span>}
            {User ? <button type="button" onClick={logOut}  className="px-8 py-3 font-semibold border rounded dark:border-gray-300 dark:text-black">LogOut</button>
			: <Link to={"/login"}><button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-300 dark:text-black">LogIn</button></Link>}
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg> 
		</button>
	</div>
</header>

    </div>
  )
}
