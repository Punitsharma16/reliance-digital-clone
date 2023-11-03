import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ()=>{
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
                navigate('/home');
            }
        } catch (error) {
            setIsError(true);
            setShowError(error.response.data.message);
        }
}

const submitForm = (e)=>{
    e.preventDefault();
    signIn({...userInfo,appType:'ecommerce'})
}
    return(
        <main>
            <aside>
            <form onSubmit={submitForm}>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" value={userInfo.email} onInput={handleInfo} placeholder="Enter your email" required/>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" value={userInfo.password} onInput={handleInfo} id="password" required/>
                {isError && <p style={{color:'red'}}>{`* ${showError}`}</p>}
                <input type="submit" value="Login" />
            </form>
            </aside>
        </main>
    )
}