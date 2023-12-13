import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase.config";

export  const AuthContext=createContext(null)
const Authprovider = ({children}) => {
 const googleProvider=new GoogleAuthProvider()
 const[user,setUser]=useState(null)   

const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)


};

const userLogIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


const userSignOut=()=>{
    return signOut()
}

const googleLogIn=()=>{
    return signInWithPopup(auth,googleProvider)
}

const userProfile=(name,image)=>{
    return updateProfile(auth.currentUser,{
       displayName:name,photoURL:image
    })
}
useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
   
       setUser(currentUser)
      
    //   const userInfo={email:currentUser?.email}
     
    //   if(currentUser){
    //     openAxios.post('/jwt',userInfo)
    //     .then(res=>{
    //     console.log(res.data)
    //      if(res.data.token){
    //       localStorage.setItem('myToken',res.data.token)
    //        setLoading(false)
    //      } 


    //     })
    //   }else{

    //     localStorage.removeItem('myToken')
    //      setLoading(false)

    //     }

     



  


       })
 
      return ()=>{
         unSubscribe()
      }
 
 },[]);


const values={createUser,userLogIn,userProfile,userSignOut,user,googleLogIn}


    return (
        <AuthContext.Provider value={values}>
           {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;