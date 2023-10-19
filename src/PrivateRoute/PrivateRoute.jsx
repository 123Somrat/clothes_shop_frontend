import React, { useContext } from 'react'
import { AuthContext } from '../Providers/Providers'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
      const {User,loading}=useContext(AuthContext);
       const location = useLocation()
       
    // loader for when checking user status useing onAuthState Change 
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto"></div>
    }


     // if user Logedin then we show which items user want to see otherwise redirect user to login page
      if(User){
        return children

      }else{

        return <Navigate to={"/login"} state={location.pathname}></Navigate>
      }

  
}
