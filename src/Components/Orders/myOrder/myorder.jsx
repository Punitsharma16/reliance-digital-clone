import { useCallback, useContext, useEffect, useState } from "react"
import style from '../../Cart/cartItem.module.css';
import design from './myorder.module.css'
import rating from '../../svgs/rating.svg'
// import axios from "axios";
export const MyOrder = ({valFromCheckout})=>{

    const [order,setOrder] = useState({});
    // const {valFromCheckout} = useContext(SendCheckoutToMyOrders);
    const token = sessionStorage.getItem('authToken')

    // const removeItemFromCart = async(id)=>{
    //     try {
    //         const res = await axios.delete(
    //             `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
    //             {
    //                 headers: {
    //                 "Authorization" : `Bearer ${token}`,
    //                  "projectID" : 'f2wxvt7cmknp'
    //             }
    //         }
    //         )
    //         console.log(res);
    //         window.location.reload();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(()=>{
            const data = sessionStorage.getItem('cartItems');
            const orderData = JSON.parse(data);
            setOrder(orderData);
    },[])
    // console.log(valFromCheckout);
    return(
        <main className={design.mainContainer}>
            <section style={{margin:'1rem'}}>
                <div className={design.sideDiv}>
                    <p>My Profile</p>
                </div>
                <div className={design.sideDiv}>
                    <p>My Cart</p>
                </div>
                <div className={design.sideDiv}>
                    <p>My Wishlist</p>
                </div>
                <div className={design.sideDiv}>
                    <p>Logout</p>
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
                                        <img className={style.cardItemImage} src={product.product.displayImage} alt="" />
                                        <div className={style.cardItemBox1}>
                                            <p style={{fontWeight:'600',marginBottom:'0.5rem'}}>{product.product.name}</p>
                                                <img src={rating} alt="rating" />
                                                <img src={rating} alt="rating" />
                                                <img src={rating} alt="rating" />
                                                <span style={{fontSize:'15px',fontWeight:'400',marginLeft:'0.5rem'}}>( {product.product.ratings} rating )</span>
                                        </div>
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
                </div>
            </section>
        </main>
    )
}