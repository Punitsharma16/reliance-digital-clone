import {useEffect, useState } from 'react'
import style from './checkout.module.css'
import rating from '../svgs/rating.svg'
import { Payment } from '../Orders/PayementModal/paymentModel';
import { PaymentBox } from './paymentForm';
import { ShippingAddressForm } from './shippingAddress/form';
import { Address } from './shippingAddress/addressFromForm';
export const Checkout = ({setValFromCheckout,buyNow})=>{
    const [addressModal,setAddressModal] = useState(false);
    const [showAddress,setShowAddress] = useState(false);
    const [showOrder,setShowOrder] = useState(false);
    const [showPayment,setShowPayment] = useState(false);
    const [cartData,setCartData] = useState({});
    const [paymentModel,setPaymentModel] = useState(false);
    // const {setValFromCheckout} = useContext(SendCheckoutToMyOrders)
    const token = sessionStorage.getItem('authToken');
    // console.log(cartVal);
    const [address,setAddress] = useState({
        pincode:'',
        firstname:'',
        lastname:'',
        address:'',
        colony:'',
        landmark:'',
        city:'',
        state:'',
        phone:''
    });
    
    useEffect(()=>{
        const data = sessionStorage.getItem('cartItems');
        const parseData = JSON.parse(data);
        setCartData(parseData);
    },[]);
    
    console.log(cartData);

    return(
        <main>
            <aside>
                <section className={style.checkoutBox}>
                    <div style={{cursor:'pointer'}} onClick={()=>setAddressModal(true)}>
                        <p style={{fontWeight:'600',fontSize:'14px'}}>SHIPPING ADDRESS</p>
                    </div>
                    { showAddress &&
                        <Address setAddressModal={setAddressModal} setShowOrder={setShowOrder} address={address}/>
                        }
                    
                </section>
                <section className={style.checkoutBox}>
                    <div style={{cursor:'pointer'}}>
                        <p onClick={()=>setShowOrder(false)} style={{fontWeight:'600',fontSize:'14px'}}>ORDER DETAILS</p>
                    </div>

                    { showOrder &&
                        <section >
                    {
                        cartData.items?.map((product)=>{
                            return (
                                <main className={style.itemContainer}  key={product._id}>
                                    <section className={style.cardItem}>
                                          <aside className={style.imgAndNameBox}>
                                        <img className={style.cardItemImage} src={product.product.displayImage} alt="" />
                                        <div className={style.cardItemBox1}>
                                            <p style={{fontWeight:'600',marginBottom:'0.5rem'}}>{product.product.name}</p>
                                            <p>
                                                <img src={rating} alt="rating" />
                                                <img src={rating} alt="rating" />
                                                <img src={rating} alt="rating" />
                                                <span style={{fontSize:'15px',fontWeight:'400',marginLeft:'0.5rem'}}>( {product.product.ratings} rating )</span>
                                            </p>
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
                    { buyNow &&
                        <main className={style.itemContainer}  key={cartData._id}>
                        <section className={style.cardItem}>
                              <aside className={style.imgAndNameBox}>
                            <img className={style.cardItemImage} src={cartData.displayImage} alt="" />
                            <div className={style.cardItemBox1}>
                                <p style={{fontWeight:'600',marginBottom:'0.5rem'}}>{cartData.name}</p>
                                <p>
                                    <img src={rating} alt="rating" />
                                    <img src={rating} alt="rating" />
                                    <img src={rating} alt="rating" />
                                    <span style={{fontSize:'15px',fontWeight:'400',marginLeft:'0.5rem'}}>( {cartData.ratings} rating )</span>
                                </p>
                            </div>
                                </aside>
                            <div className={style.cardItemBox2} style={{textAlign:'right'}}>
                                <p style={{fontWeight:'600',fontSize:'17px',color:'#3d3d3d'}}>Price :&#x20B9; {cartData.price}</p>
                                <p style={{fontWeight:'400',fontSize:'14px',color:'#3d3d3d'}}>Inclusive of all taxes</p>
                                <p style={{fontSize:'14px',color:'aquamarin'}}>Free shipping</p>
                                <p style={{fontSize:'14px',color:'rgb(11, 11, 112)',margin:'0.3rem 0rem'}}>Standard Delivery : <span> Before 3 days </span></p>
                                <p style={{fontSize:'13px',fontWeight:'600',color:'#3d3d3d'}}>*Delivery assurance is subject to our <br />delivery
                                 locations staying open <br /> as per govt. regulations</p>
                            </div>
                        </section>
                    </main>
                    }

                <div className={style.orderTotal}>
                    <p>Order Total</p>
                    <p style={{color:'darkblue'}}> &#x20B9; {cartData.totalPrice}</p>
                </div>
                <div style={{margin:'1rem'}}>
                    <p style={{fontSize:'13px'}}>*In order to authenticate and redeem Store Credit or ROne Loyalty Points an OTP validation shall be required. Post successful OTP verification, further payment if any shall be facilitated.</p>
                    <button onClick={()=>setShowPayment(true)} className={style.paymentButton}>PROCEED TO PAYMENT</button>
                </div>
                </section>
                }
            </section>

            <PaymentBox setPaymentModel={setPaymentModel} setValFromCheckout={setValFromCheckout} showPayment={showPayment}/>
            
            </aside>

            { addressModal &&
                <ShippingAddressForm setShowAddress={setShowAddress} setAddressModal={setAddressModal} address={address} setAddress={setAddress}/>
                }
    
         {paymentModel && <Payment/>}
        </main>
    )
}