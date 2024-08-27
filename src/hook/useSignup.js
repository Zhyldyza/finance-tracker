import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../firebase/config";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useSignup=()=>{
    const [error,setError]=useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch }= useContext (AuthContext);

    const signup=async(email,password,displayName)=>{
        setError(null)
        setIsPending(true)

        try{
            const response = await createUserWithEmailAndPassword( auth,email,password);
            
            if(!response){
                setError("User was not created")
            }

            await updateProfile(response.user,{
                displayName,
            });

            dispatch({type: 'LOGIN',payload: response.user});

        }catch(error){
            setError(error.message)
        }finally{
            setIsPending(false)
        }
    };

    return{error, isPending,signup}
}