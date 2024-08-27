import {auth} from "../firebase/config";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";

export const useLogout=()=>{
    const [error,setError]=useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch }= useContext (AuthContext);

    const logout =async() =>{
        setError(null)
        setIsPending(true)

        try{
            await signOut(auth);
            dispatch({type: 'LOGOUT'});
        }catch(error){
            setError(error.message)
        }finally{
            setIsPending(false)
        }
    };

    return{error, isPending, logout}
}