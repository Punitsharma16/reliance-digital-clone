import {useEffect, useState } from "react"
import style from '../../Cart/cartItem.module.css';
import design from './myorder.module.css'
import rating from '../../svgs/rating.svg'
import logout from '../../svgs/logout.svg'
import cart from '../../svgs/blackCart.svg'
import heart from '../../svgs/heart.svg'
import profile from '../../svgs/blackProfile.svg'
import { useNavigate } from "react-router-dom";
export const MyOrder = ({buyNow})=>{

    const [order,setOrder] = useState({});
    const [user,setUser] = useState({}); 
    const navigate = useNavigate();
    useEffect(()=>{
        const user = sessionStorage.getItem('userInfo');
        const userData = JSON.parse(user);
        setUser(userData);
    },[])

    useEffect(()=>{
            const data = sessionStorage.getItem('cartItems');
            const orderData = JSON.parse(data);
            setOrder(orderData);
    },[])
    // console.log(valFromCheckout);
    return(
        <main className={design.mainContainer}>
            <section className="hide" style={{margin:'1rem'}}>
                    <div className={design.div1}>
                        <p style={{fontWeight:'600'}}>{user.name}</p>
                        <p style={{fontWeight:'400',fontSize:'15px'}}>{user.email}</p>
                    </div>
                <div onClick={()=>navigate('/myProfile')} className={design.sideDiv}>
                    <p> <img src={profile} alt="" />My Profile</p>
                </div>
                <div onClick={()=>navigate('/cartItem')} className={design.sideDiv}>
                    <p> <img src={cart} alt="cart" />My Cart</p>
                </div>
                <div onClick={()=>navigate('/wishlist')} className={design.sideDiv}>
                    <p> <img src={heart} alt="" />My Wishlist</p>
                </div>
                <div onClick={()=>sessionStorage.clear()} className={design.sideDiv}>
                    <p> <img src={logout} alt="" />Logout</p>
                </div>
            </section>
            <section>
                <div className={design.orderDiv}>
                    <p>Order Items</p>
                </div>
                <div>
                {
                        order.items?.map((product)=>{
                            return (
                                <main className={style.itemContainer}  key={product._id}>
                                    <section className={style.cardItem}>
                                        <aside className={style.imgAndNameBox}>
                                        <img className={style.cardItemImage} src={product.product.displayImage} alt="" />
                                        <div className={style.cardItemBox1}>
                                            <p style={{fontWeight:'600',marginBottom:'0.5rem'}}>{product.product.name}</p>
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
                                </main>
                            )
                        })
                    }
                    {buyNow &&
                      <main className={style.itemContainer}  key={order._id}>
                        <section className={style.cardItem}>
                            <img className={style.cardItemImage} src={order.displayImage} alt="" />
                            <div className={style.cardItemBox1}>
                                <p style={{fontWeight:'600',marginBottom:'0.5rem'}}>{order.name}</p>
                                    <img src={rating} alt="rating" />
                                    <img src={rating} alt="rating" />
                                    <img src={rating} alt="rating" />
                                    <span style={{fontSize:'15px',fontWeight:'400',marginLeft:'0.5rem'}}>( {order.ratings} rating )</span>
                            </div>
                            <div className={style.cardItemBox2} style={{textAlign:'right'}}>
                                <p style={{fontWeight:'600',fontSize:'17px',color:'#3d3d3d'}}>Price :&#x20B9; {order.price}</p>
                                <p style={{fontWeight:'400',fontSize:'14px',color:'#3d3d3d'}}>Inclusive of all taxes</p>
                                <p style={{fontSize:'14px',color:'aquamarin'}}>Free shipping</p>
                                <p style={{fontSize:'14px',color:'rgb(11, 11, 112)',margin:'0.3rem 0rem'}}>Standard Delivery : <span> Before 3 days </span></p>
                                <p style={{fontSize:'13px',fontWeight:'600',color:'#3d3d3d'}}>*Delivery assurance is subject to our <br />delivery
                                 locations staying open <br /> as per govt. regulations</p>
                            </div>
                        </section>
                      </main>
                    }
                </div>
            </section>
        </main>
    )
}