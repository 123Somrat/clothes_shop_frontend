import React, { useContext } from 'react'
import { AuthContext } from '../Providers/Providers'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
      const {User}=useContext(AuthContext);
       const location = useLocation()
       console.log(location)
      if(User){
        return children
      }else{
        return <Navigate to={"/login"} state={location.pathname}></Navigate>
      }

  
}
