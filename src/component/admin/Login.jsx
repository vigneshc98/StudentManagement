import React,{useState, useContext} from 'react';
import {useNavigate } from 'react-router-dom'
import {AuthContextApi} from '../contextApi/AuthContextapi'
import css from './login.module.css'
import { toast } from "react-toastify";
import Spinner from '../spinner/Spinner';

const Login = () => {

    const context = useContext(AuthContextApi);
    const {user, login} = context;

    let navigate = useNavigate();

    const [auth, setAuth] = useState({
        email:"",
        password:""
    })
    const [loading, setLoaidng] = useState(false)

    let{email, password}=auth;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoaidng(true);
            await login(email,password);
            setLoaidng(false);
            navigate("/main")
            // toast.success("SingIn successfull");
        } 
        catch (error) {
            toast.error(error.message);
            setLoaidng(false);
        }
    };

    return (
        <>
        <div className={css.container}>
            <div className={css.spinnerDiv}>
               {loading &&   <div className={css.spinner}> <Spinner className={css.spinner}  />  </div>}
            </div>
            <div className={css.subContainer}>
                <div className={css.textdiv}>
                    <h2 >Enter your credential</h2>
                </div>
                <form onSubmit={handleSubmit} className={css.form} >
                    
                    <input type="email" placeholder="Enter you Email" value={email} name="email" onChange={(e)=>setAuth({...auth,"email":e.target.value})} className={css.input} autoComplete="off" required />
    
                    <input type="password" placeholder="Enter your Password" value={password} name="password" onChange={(e)=>setAuth({...auth,"password":e.target.value})}  className={css.input} required />
                    <div className={css.checkdiv}>
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className={css.checkdivP}>Keep me signed in</label>
                    </div> 
                    <button type="submit" className={css.btn}  >SignIn</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
