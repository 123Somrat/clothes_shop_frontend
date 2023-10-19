// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBBZDCttJbjrM9n_h-GiC0PAvMcz9M5L98",
  authDomain:"clothes-shop-3af54.firebaseapp.com",
  projectId: "clothes-shop-3af54",
  storageBucket:"clothes-shop-3af54.appspot.com",
  messagingSenderId:"485167649975",
  appId:"1:485167649975:web:d1eb5419ffb97faccb2932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;