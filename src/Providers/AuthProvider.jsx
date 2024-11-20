import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import  { createContext, useEffect, useState } from 'react';
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createUser = ( email,password,name )=>{
        return createUserWithEmailAndPassword(auth , email,password,name )
    }

    const signInUse = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
        });

        return ()=>{
            unSubscribe();
        } 
    },[])

    const authInfo = {user , createUser, signInUse}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;