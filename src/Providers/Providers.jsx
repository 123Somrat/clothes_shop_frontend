import { createContext } from 'react'
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import auth from '../FirebaseConfig/FirebaseConfig';
import {  } from "firebase/auth";
// Createing user context
export const AuthContext = createContext()

export default function Providers({children}) {


// create user useing firebase
const createUser = (fname,lname,email,password)=>{
         return createUserWithEmailAndPassword (auth,email,password)
}
 
//  Login with Google 
 
const loginUserWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
   return signInWithPopup(auth,provider)

}



const User = {
    createUser,
    loginUserWithGoogle
}

return( <AuthContext.Provider value={User}>
         {children}
      </AuthContext.Provider>
)
}

