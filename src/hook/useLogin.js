import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase/config";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogin=()=>{
    const [error,setError]=useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch }= useContext (AuthContext);

    const login=async(email,password)=>{
        setError(null)
        setIsPending(true)

        try{
            const response = await signInWithEmailAndPassword( auth,email,password);
            
            if(!response){
                setError("User was not created")
            }

            dispatch({type: 'LOGIN',payload: response.user});

        }catch(error){
            setError(error.message)
        }finally{
            setIsPending(false)
        }
    };

    return{error, isPending,login}
}