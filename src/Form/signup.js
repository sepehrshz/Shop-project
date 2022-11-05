import React, { useEffect, useState } from 'react';
import {validate} from './validate.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toastify.js";
import { Link } from 'react-router-dom';
import styles from "./signup.module.css";
export const Signup = () => {
    
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmedpassword:"",
        isAccepted:false
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(data,"signup"))
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
            notify("You signed in successfuly!", "success")
        } 
        else{
            notify("Invalid data!", "error")
        }
    }

    return (
        <div className={styles.container}> 
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Signup</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        type="text" 
                        name="name" 
                        value={data.name} 
                        onChange={changeHandler} 
                        className={(errors.name && isSubmit) ? styles.uncompleted : styles.formInput}/>
                    {errors.name && isSubmit && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm password</label>
                    <input
                     type="password" 
                     name="confirmedpassword" 
                     value={data.confirmedpassword} 
                     onChange={changeHandler} 
                     className={(errors.confirmedpassword && isSubmit) ? styles.uncompleted : styles.formInput}/>
                    {errors.confirmedpassword && isSubmit && <span>{errors.confirmedpassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>I accept terms of privacy policy.</label>
                    <input
                     type="checkbox" 
                     name="isAccepted" 
                     value={data.isAccepted} 
                     onChange={changeHandler} 
                     className={(errors.isAccepted && isSubmit) ? styles.uncompleted : styles.formInput}/>
                    </div>
                    {errors.isAccepted && isSubmit && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons} >
                    <Link to="/login">Login</Link>
                    <button type="submit">Sign up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}


export default Signup;