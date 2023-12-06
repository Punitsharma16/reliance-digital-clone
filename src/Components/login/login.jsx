import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from './login.module.css'

export const Login = ({setShowLogin})=>{
    const navigate = useNavigate();
    const [isError,setIsError] = useState(false);
    const [showError, setShowError] = useState('');
    const [userInfo,setUserInfo] = useState({
        email:'',
        password:'',
    });
    const handleInfo = (e)=>{
        const {name,value} = e.target;
        setUserInfo({...userInfo,[name]:value})
    }

    const signIn = async (userInfo)=>{
        try {
            const responce = await axios.post(
                'https://academics.newtonschool.co/api/v1/user/login',
                userInfo,
                {
                    headers:{
                        projectId:'f2wxvt7cmknp',
                    }
                }
            )
            console.log(responce);
            if(responce.data.token){
                sessionStorage.setItem("authToken",responce.data.token);
                console.log(responce.data.token);
                sessionStorage.setItem("userInfo",JSON.stringify(responce.data.data));
                setIsError(false)
                setShowLogin(false);
                navigate('/')
            }
        } catch (error){
                if (error.response && error.response.data && error.response.data.message) {
                   setIsError(true);
                    setShowError(error.response.data.message);
                    console.log(error.response.data.message);
                }
        }
}

const submitForm = (e)=>{
    e.preventDefault();
    signIn({...userInfo,appType:'ecommerce'});
}
    return(
        <main className={style.modal}>
            <aside className={style.formContainer}>
                <div className={style.formContainerHeading}>
                    <p>Login</p>
                    <button onClick={()=>setShowLogin(false)}>x</button>
                </div>
            <form className={style.form} onSubmit={submitForm}>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" value={userInfo.email} onInput={handleInfo} placeholder="Enter your email" required/><br />
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={userInfo.password} onInput={handleInfo} id="password" placeholder="Enter your password" required/><br />
                {isError && <p style={{color:'red'}}>{`* ${showError}`}</p>}
                <input type="submit" value="Login" />
                <br />
            </form>
            <p>Not a user ? <Link to='/signup'>Registered here</Link></p>
            </aside>
        </main>
    )
}