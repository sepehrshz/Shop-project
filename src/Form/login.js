import React, { useEffect, useState } from 'react';
import {validate} from './validate.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toastify.js";
import styles from "./login.module.css";
import { Link } from 'react-router-dom';
export const Login = () => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(data,"login"))
    }, [data])

    const changeHandler = event => {
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})            
        } else{
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const submitHandler = event => {
        event.preventDefault();
        setIsSubmit(true);
        if(!Object.keys(errors).length){
            notify("You  login successfuly!", "success")
        } else{
            notify("Invalid data!", "error")
        }
    }

    return (
        <div className={styles.container}> 
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                     type="text" 
                     name="email" 
                     value={data.email} 
                     onChange={changeHandler} 
                     className={(errors.email && isSubmit) ? styles.uncompleted : styles.formInput}/>
                    {errors.email && isSubmit && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                     type="password" 
                     name="password" 
                     value={data.password} 
                     onChange={changeHandler} 
                     className={(errors.password && isSubmit) ? styles.uncompleted : styles.formInput}/>
                    {errors.password && isSubmit && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons} >
                    <Link to="/signup">Sign up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}


export default Login;