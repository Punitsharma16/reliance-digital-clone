import axios from "axios"
import {useEffect, useState } from "react";
import rating from '../svgs/rating.svg'
import style from './cartItem.module.css'
import { AddItemWishList } from "../WishList/addItemToWishlist";
import { Sidebox } from "./sidebar";

export const CartItems = ()=>{
    const token = sessionStorage.getItem('authToken')
    const [cartItems,setCartItem] = useState({});
    const fetchCartItems = async ()=>{
        try {
            const responce = await axios.get(
                'https://academics.newtonschool.co/api/v1/ecommerce/cart',{
                    headers: {
                    "Authorization" : `Bearer ${token}`,
                     "projectID" : 'f2wxvt7cmknp'
                }
            })
                console.log(responce.data.data);
          sessionStorage.setItem('cartItems',JSON.stringify(responce.data.data));

                setCartItem(responce.data.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchCartItems();
    },[])
    const removeItemFromCart = async(id)=>{
        try {
            const res = await axios.delete(
                `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
                {
                    headers: {
                    "Authorization" : `Bearer ${token}`,
                     "projectID" : 'f2wxvt7cmknp'
                }
            }
            )
            console.log(res);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <main className={style.container}>
            <aside>
                <section className={style.cartItemHeading}>
                    <div>
                        <span style={{fontWeight:'600',fontSize:'17px'}}>My Cart </span>
                        <span style={{fontSize:'14px',fontWeight:'400'}}>( {cartItems.items?.length} Items )</span>
                    </div>
                    
                    <p style={{fontSize:'14px',fontWeight:'400'}}>Shipping to 127111</p>
                </section>
                <section >
                    {
                        cartItems.items?.map((product)=>{
                            return (
                                <main className={style.itemContainer}  key={product._id}>
                                    <section className={style.cardItem}>
                                        <aside className={style.imgAndNameBox}>
                                        <img className={style.cardItemImage} src={product.product.displayImage} alt="" />
                                        <div className={style.cardItemBox1}>
                                            <p className={style.nametag} style={{fontWeight:'600',marginBottom:'0.5rem'}}>{product.product.name}</p>
                                                <img src={rating} alt="rating" />
                                                <img src={rating} alt="rating" />
                                                <img src={rating} alt="rating" />
                                                <span style={{fontSize:'15px',fontWeight:'400',marginLeft:'0.5rem'}}>( {product.product.ratings} rating )</span>
                                        </div>
                                        </aside>
                                        <div className={style.cardItemBox2} style={{textAlign:'right'}}>
                                            <p style={{fontWeight:'600',fontSize:'17px',color:'#3d3d3d'}}>Price :&#x20B9; {product.product.price}</p>
                                            <p style={{fontWeight:'400',fontSize:'14px',color:'#3d3d3d'}}>Inclusive of all taxes</p>
                                            <p style={{fontSize:'14px',color:'aquamarin'}}>Free shipping</p>
                                            <p style={{fontSize:'14px',color:'rgb(11, 11, 112)',margin:'0.3rem 0rem'}}>Standard Delivery : <span> Before 3 days </span></p>
                                            <p style={{fontSize:'13px',fontWeight:'600',color:'#3d3d3d'}}>*Delivery assurance is subject to our <br />delivery
                                             locations staying open <br /> as per govt. regulations</p>
                                        </div>
                                    </section>
                                    <hr />
                                    <section className={style.cartItemButton}>
                                        <p id={product.product._id} onClick={(e)=>removeItemFromCart(e.currentTarget.id)}>Remove</p>
                                        <p><AddItemWishList id={product.product._id}/></p>
                                    </section>
                                </main>
                            )
                        })
                    }
                </section>
            </aside>
            <Sidebox cartItems={cartItems}/>
        </main>
    )
}