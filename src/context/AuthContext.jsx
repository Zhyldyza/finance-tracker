import React from "react";
import { createContext, useReducer } from "react";


export const AuthContext=createContext();

export const authReducer = (state,action) => { 
    switch(action.type){
        case 'LOGIN':{
            return{...state,user: action.payload}
        }
        case 'LOGOUT':{
            return{...state,user: null}
        }
        default:
            return state;
    }

    //if(action.type) return state;
};

export const AuthProvider=({ children }) => {
    const [state, dispatch]=useReducer(authReducer,{
        user:null,
    });

    console.log("State is changed",state)

    return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
    );
};