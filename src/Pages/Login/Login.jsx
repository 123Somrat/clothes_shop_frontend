import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/Providers'
import Swal from 'sweetalert2'


export default function Login() {
    const [error,setError] = useState("")
   // const [passError,setPassError] = useState("")
     const {loginUserWithGoogle,loginWithEmailAndPassword} = useContext(AuthContext)
     const navigate = useNavigate()
     

  // login with email and password

 const handleSubmit = (e) =>{
     e.preventDefault()
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value

     loginWithEmailAndPassword(email,password)
     .then(res=>{
        Swal.fire({
             title: 'Success',
             text: 'Login  Successfully',
             icon: 'success',
             confirmButtonText: 'Cool'
           
           })
        
           return  navigate("/")
         
     })
     .catch(err=>{
        Swal.fire({
             title: 'error',
             text: "UnAuthorized Credentials",
             icon: 'error',
             confirmButtonText: 'Cool'
           
           })
       return  setError(err.message)
          // return  navigate("/login")
         
     })
 }




    // Login User With Google
    const loginWithGoogle = () =>{
        loginUserWithGoogle()
        .then(data=>{
            Swal.fire({
                 title: 'Success',
                 text: 'Login  Successfully',
                 icon: 'success',
                 confirmButtonText: 'Cool'
               
               })
                setError("")
               return  navigate("/")
             
         })
        .catch(err=>{
            Swal.fire({
                 title: 'error',
                 text: 'Acces Denied by User',
                 icon: 'error',
                 confirmButtonText: 'Cool'
               
               })
            
              // return  navigate("/login")
             
         })

    }
  return (
    <div>
<div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-200 dark:text-gray-100 mx-auto">
	<h1 className="text-2xl font-bold text-center text-black">Login</h1>
	<form  className="space-y-6" onSubmit={handleSubmit}>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-black">Email</label>
			<input type="email" name="email" id="username" placeholder="example@gmail.com" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-black focus:dark:border-violet-400" />
            {Error && <span className='text-red-800 m-4 block'>{Error}</span>}
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-black">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-black focus:dark:border-violet-400" />
            {Error && <span className='text-red-800 m-4 block'>{Error}</span>}
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-gray-100 text-lg">Login</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-black">Login with Google</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm" onClick={loginWithGoogle}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-black">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
		<Link to={"/register"} className="underline dark:text-black">Sign up</Link>
	</p>
</div>



    </div>
  )
}
