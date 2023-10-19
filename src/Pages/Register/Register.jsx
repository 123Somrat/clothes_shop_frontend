import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Providers/Providers';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
export default function Register() {
      const { createUser} = useContext(AuthContext)
      const navigate = useNavigate()
      const [fnameError,setfnameError] = useState("")
      const [lnameError,setlnameError] = useState("")
      const [passError,setPassError] = useState("")
      const [emailError,setEmailError] = useState("")
    const handleSubmit = (e) => {
         e.preventDefault()
         const form = e.target;
         const fname = form.fname.value;
         const lname = form.lname.value;
         const email = form.email.value;
         const password = form.password.value;

         // email regex pattern
         const regex = /.+\@.+\..+/

        // checking fname empty or not
         if(fname===""){
            setfnameError("fisrt name can not empty")
            return
         }else{
            setfnameError("")
         }

        // checking lname empty or not
        if(lname===""){
            setlnameError("last name can not empty")
            return
        }else{
             setlnameError("")
        }

         // checking email field empty or not and its follow the email pattern or not
        if(email==="" || !email.match(regex)){
            setEmailError("email can not empty or email should email@gmail.com")
          return
        }else{
            setEmailError("")
        }
        
        // checking password feild empty or not and its more the 6 cherecter long or not
        
         if(password === "" || password.length< 6){
            setPassError("PassWord can not empty and PassWord must be 6 cherecter long")
            return
         }else{
            setPassError("")
         }


        createUser(fname,lname,email,password)
        .then(res=>{
           Swal.fire({
                title: 'Success',
                text: 'User Created Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              
              })
           
              return  navigate("/login")
            
        })
        .catch(error=>{
            Swal.fire({
                 title: 'error',
                 text: 'Email Already Exeist',
                 icon: 'error',
                 confirmButtonText: 'Cool'
               
               })
               //reset the form
               form.reset()
              
             
         })
    }
    lnameError

  return (
    <div>
<section className="p-6 dark:bg-gray-200 dark:text-gray-50 m-8">
	<form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-100">
		
			<div className="grid grid-cols-12 gap-4 col-span-full lg:col-span-6 ">
            <div className="col-span-full sm:col-span-3  lg:col-span-12 mx-auto">
                  <h1 className="px-8 py-3 font-semibold text-4xl dark:text-black">Register</h1>
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="firstname" className="text-sm text-black">First name</label>
					<input id="firstname" type="text" name="fname" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-black p-4" />
                    {fnameError && <span className='text-red-800 m-4 block'>{fnameError}</span>}
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="lastname" className="text-sm text-black">Last name</label>
					<input id="lastname" type="text" name="lname" placeholder="Last name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-black p-4" />
                    {lnameError && <span className='text-red-800 m-4 block'>{lnameError}</span>}
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="email" className="text-sm text-black">Email</label>
					<input id="email" type="email" name="email" placeholder="example@gmail.com" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 text-black p-4" />
                    {emailError && <span className='text-red-800 m-4 block'>{emailError}</span>}
				</div>
               
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="email" className="text-sm text-black">PassWord</label>
					<input id="password" type="password" name="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-black p-4" />
                    {passError && <span className='text-red-800 m-4 block'>{passError}</span>}
				</div>
                <div className="col-span-full sm:col-span-3  lg:col-span-12 mx-auto">
                  <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-400 dark:text-black">Register</button>
				</div>
                
					
			</div>
		</fieldset>
		
	</form>
</section>



    </div>
  )
}
