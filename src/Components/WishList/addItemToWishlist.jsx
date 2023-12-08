import axios from 'axios';
import heart from '../svgs/heart.svg'
import style from './wishlist.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Login } from '../login/login';

export const AddItemWishList = ({id})=>{
    const token = sessionStorage.getItem('authToken');
    const [showLogin,setShowLogin] = useState(false);
    const navigate = useNavigate();
    const addItemTowishlist = async(id)=>{
        if(token || showLogin){
        try {
            const responce = await axios.patch(
                'https://academics.newtonschool.co/api/v1/ecommerce/wishlist',
                {
                  "productId": `${id}`
                } ,
                {
                    headers: {
                    "Authorization" : `Bearer ${token}`,
                     "projectID" : 'f2wxvt7cmknp'
                }
            }
            )
            console.log(responce.data.message);
            alert(responce.data.message);
        } catch (error) {
            console.log(error);
            alert('Already added in wishlist');
        }
    }else{
                navigate('/login')
            //    setShowLogin(true);
        }
   }
    return(
        <main>
            <div id={id} onClick={(e)=>addItemTowishlist(e.currentTarget.id)} className={style.wishlistClick}>
                <span><img src={heart} alt="heart" />Add to Wishlist</span>
            </div>
            {/* {showLogin && <Login setShowLogin={setShowLogin}/>} */}
        </main>
    )
}