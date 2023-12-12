import axios from "axios"
import { useContext, useEffect, useState } from "react";
import rating from '../svgs/rating.svg'
import style from './cartItem.module.css'
import { useNavigate } from "react-router-dom";
import { CartItemsData } from "../../App";
import { AddItemWishList } from "../WishList/addItemToWishlist";

export const CartItems = ()=>{
    const {setCartVal} = useContext(CartItemsData);
    const token = sessionStorage.getItem('authToken')
    const [cartItems,setCartItem] = useState({});
    const navigate = useNavigate();
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

    const handleCheckOut = (token)=>{
        if(token){
            setCartVal(cartItems)
            navigate('/checkout')
        }else{
            // alert('Your Cart is Empty');
            navigate('/login');
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
                                        <p>{<AddItemWishList/>}</p>
                                    </section>
                                </main>
                            )
                        })
                    }
                </section>
            </aside>
            <aside>
                <div>
                    <button onClick={handleCheckOut} className={style.checkoutButton}>CHECKOUT</button>
                </div>
                <section className={style.totalPrices}>
                    <div className={style.inputBox}>
                        <input type="text" placeholder="Enter Coupon Code" />
                        <button>Apply</button>
                    </div>
                    <p style={{margin:'0.5rem 0rem'}}>PRICE DETAILS</p>
                    <div style={{display:'flex',justifyContent:'space-between',fontSize:'14px'}}>
                    <p>Total Price ( <span>{cartItems.items?.length}</span> )</p>
                    <p>&#x20B9;{cartItems.totalPrice}</p>
                    </div>
                    <div style={{display:'flex',margin:'0.5rem 0rem 1rem 0rem',justifyContent:'space-between',fontSize:'14px'}}>
                        <p>Delivery Charges</p>
                        <p style={{color:'green',fontWeight:'500'}}>Free</p>
                    </div>
                    <hr />
                    <div style={{padding:'0.5rem 0rem',display:'flex',justifyContent:'space-between'}}>
                        <p>AMOUNT PAYABLE</p>
                        <p>&#x20B9;{cartItems.totalPrice}</p>
                    </div>
                    <hr />
                    <p style={{marginTop:'1rem'}}>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                </section>
            </aside>
        </main>
    )
}