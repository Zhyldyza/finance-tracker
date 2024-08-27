import React, { useState } from 'react';
import styles from "./Login.module.css";
import { useLogin } from '../../hook/useLogin';

const Login = () => {
 
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const { login, isPending, error} = useLogin();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        await login (email, password);

        setEmail("");
        setPassword("");
    }

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <h2>Login</h2>
        <label>
            <span>email</span>
            <input type="email" value = {email} onChange={(e) =>setEmail(e.target.value)}></input>
        </label>
        <label>
            <span>password:</span>
            <input type="password" value = {password} onChange={(e) =>setPassword(e.target.value)}></input>
        </label>
        {!isPending && <button className='btn' >Login</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        { error &&<p>{error}</p>}
    </form>
  );
};

export default Login