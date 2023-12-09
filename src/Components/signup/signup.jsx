import axios from "axios";
import { useState } from "react";
import style from './signup.module.css'
import { Link, useNavigate } from "react-router-dom";

export const SignUp = ()=>{
    const navigate = useNavigate();
    const [isError,setIsError] = useState(false)
    const [error,setError] = useState();
    const [userInfo,setUserInfo] = useState({
        name:'',
        email:'',
        password:'',
    })
    const handleInfo =(e)=>{
        const{name,value} = e.target;
        setUserInfo({...userInfo,[name]:value})
    };

    const signup = async (userInfo)=>{
        try {
            const responce = await axios.post(
                'https://academics.newtonschool.co/api/v1/user/signup',
                userInfo,
                {
                    headers:{
                        projectId:'f2wxvt7cmknp',
                    }
                }
            )
            if(responce.data.token){
                sessionStorage.setItem("authToken",responce.data.token);
                // console.log(responce);
                sessionStorage.setItem("userInfo",JSON.stringify(responce.data.data.user));
                setIsError(false);
                alert('Created Successfully');
                navigate('/login');
            }
        } catch (error) {
            setIsError(true);
            setError(error.response.data.message);
        }
    }

    const submitForm = (e)=>{
        e.preventDefault();
        signup({...userInfo,appType:'ecommerce'});
    };


    return(
        <aside className={style.modal}>
        <main className={style.formContainer}>
            <div className={style.formContainerHeading}>
                <p>Register New Account</p>
                <button>X</button>
            </div>
            <form className={style.form} onSubmit={submitForm}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" value={userInfo.name} onInput={handleInfo} placeholder="Enter your name" required/>
            <br />
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" value={userInfo.email} onInput={handleInfo} placeholder="Enter your email" required/>
            <br />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" value={userInfo.password} onInput={handleInfo} id="password" placeholder="Create a password" />
            {isError && <p style={{color:'red'}}>{`* ${error}`}</p>}
            <br />
            <input type="submit" value="Submit" />
            </form>
            <p>Already Registered? <Link to='/login' style={{fontWeight:'600'}}>LOGIN</Link></p>
        </main>
        </aside>
    )
}