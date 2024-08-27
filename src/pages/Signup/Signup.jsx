import React, { useState } from 'react'
import styles from "./Signup.module.css"
import { useSignup } from '../../hook/useSignup';

const Signup = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup, isPending, error} = useSignup();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        
        await signup(email, password, userName)

        setEmail("");
        setPassword("");
        setUserName("");
    };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
        <h2>Signup</h2>
        <label>
            <span>User name:</span>
            <input type="text" value = {userName} onChange={(e)=>setUserName(e.target.value)}></input>
        </label>
        <label>
            <span>Email</span>
            <input type="email" value = {email} onChange={(e)=>setEmail(e.target.value)}></input>
        </label>
        <label>
            <span>Password:</span>
            <input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        {!isPending && <button className='btn' >Signup</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        { error &&<p>{error}</p>}
    </form>
  )
}

export default Signup;