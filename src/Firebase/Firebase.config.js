// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSyoFy8sQlzb1H-Bb5b93Cg2yKUH4IPE0",
  authDomain: "auth-moha-milon-b6abf.firebaseapp.com",
  projectId: "auth-moha-milon-b6abf",
  storageBucket: "auth-moha-milon-b6abf.firebasestorage.app",
  messagingSenderId: "1033210309311",
  appId: "1:1033210309311:web:281c9d92df68776dc4740a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
