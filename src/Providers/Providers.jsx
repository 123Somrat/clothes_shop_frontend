import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "../FirebaseConfig/FirebaseConfig";
import Swal from "sweetalert2";

// Createing user context
export const AuthContext = createContext();

export default function Providers({ children }) {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user useing firebase
  const createUser = (fname, lname, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user with email and password

  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Login with Google

  const loginUserWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // checking user Status useng google onAuthStateChanged utility

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // setLoading false after got user
        return setLoading(false);
      } else {
        console.log("user signOut succesfully");
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "LogOut Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const UserData = {
    createUser,
    loginUserWithGoogle,
    loginWithEmailAndPassword,
    User,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={UserData}>{children}</AuthContext.Provider>
  );
}
