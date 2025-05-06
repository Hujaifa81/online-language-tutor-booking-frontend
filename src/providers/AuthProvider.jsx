import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext=createContext(null)
export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const goggleProvider = new GoogleAuthProvider();

    const googleSignIn=()=>{
        return signInWithPopup(auth, goggleProvider)
    }
    const emailRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
       return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            // Set token
            if (currentUser?.email) {
              axios.post(`${import.meta.env.VITE_baseURL}/jwt`, { email: currentUser.email }, {
                withCredentials: true
              });
            }
          } else {
            axios.post(`${import.meta.env.VITE_baseURL}/logout`, {}, { withCredentials: true });
            setUser(null);
          }
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);
      
    const value={
        googleSignIn,
        emailSignIn,
        user,
        emailRegister,
        loading,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
            {
                children
            }
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;