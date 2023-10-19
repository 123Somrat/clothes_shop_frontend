import { createContext, useEffect ,useState} from 'react'
import { createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import auth from '../FirebaseConfig/FirebaseConfig';
import {  } from "firebase/auth";
import Swal from 'sweetalert2'



// Createing user context
export const AuthContext = createContext()

export default function Providers({children}) {
   const [User,setUser] = useState(null)

// create user useing firebase
const createUser = (fname,lname,email,password)=>{
         return createUserWithEmailAndPassword (auth,email,password)
}
 
// Login user with email and password

const loginWithEmailAndPassword = (email,password)=>{
       return signInWithEmailAndPassword (auth,email,password)
}



//  Login with Google 
 
const loginUserWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
   return signInWithPopup(auth,provider)

}

// checking user Status useng google onAuthStateChanged utility

     useEffect(()=>{
       onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
               console.log("user signOut succesfully")
            }
          });

      

     },[])

const logOut = ()=>{
 
    signOut(auth)
    .then(() => {
        Swal.fire({
             title: 'Success',
             text: 'LogOut Successfully',
             icon: 'success',
             confirmButtonText: 'Cool'
           
           })
           setUser(null)
           return  navigate("/login")
         
     })
      .catch((error) => {
        // An error happened.
      });
}


const UserData = {
    createUser,
    loginUserWithGoogle,
    loginWithEmailAndPassword,
    User,
    logOut
}

return( <AuthContext.Provider value={UserData}>
         {children}
      </AuthContext.Provider>
)
}

