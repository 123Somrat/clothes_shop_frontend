import React from 'react'

export default function Register() {
  return (
    <div>
<section className="p-6 dark:bg-gray-200 dark:text-gray-50 m-8">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-100">
		
			<div className="grid grid-cols-12 gap-4 col-span-full lg:col-span-6 ">
            <div className="col-span-full sm:col-span-3  lg:col-span-12 mx-auto">
                  <h1 className="px-8 py-3 font-semibold text-4xl dark:text-black">Register</h1>
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="firstname" className="text-sm text-black">First name</label>
					<input id="firstname" type="text" name="firstname" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-black p-4" />
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="lastname" className="text-sm text-black">Last name</label>
					<input id="lastname" type="text" name="lastname" placeholder="Last name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-black-400 p-4" />
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="email" className="text-sm text-black">Email</label>
					<input id="email" type="email" name="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-black-400 p-4" />
				</div>
				<div className="col-span-full sm:col-span-3  lg:col-span-6">
					<label htmlFor="email" className="text-sm text-black">PassWord</label>
					<input id="password" type="text" name="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-black-400 p-4" />
				</div>
                <div className="col-span-full sm:col-span-3  lg:col-span-12 mx-auto">
                  <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-400 dark:text-black">Register</button>
				</div>
                
					
			</div>
		</fieldset>
		
	</form>
</section>



    </div>
  )
}
