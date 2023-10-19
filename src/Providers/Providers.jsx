import { createContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../FirebaseConfig/FirebaseConfig';

// Createing user context
export const AuthContext = createContext()

export default function Providers({children}) {


// create user useing firebase
const createUser = (fname,lname,email,password)=>{
         return createUserWithEmailAndPassword (auth,email,password)
}
 

const User = {
    createUser
}

return( <AuthContext.Provider value={User}>
         {children}
      </AuthContext.Provider>
)
}

