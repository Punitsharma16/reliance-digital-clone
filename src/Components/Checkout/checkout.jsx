import { useContext, useEffect, useState } from 'react'
import style from './checkout.module.css'
import rating from '../svgs/rating.svg'
import { Payment } from '../Orders/PayementModal/paymentModel';
export const Checkout = ()=>{
    const [addressModal,setAddressModal] = useState(false);
    const [showAddress,setShowAddress] = useState(false);
    const [showOrder,setShowOrder] = useState(false);
    const [showPayment,setShowPayment] = useState(false);
    const [cartData,setCartData] = useState({});
    const [paymentModel,setPaymentModel] = useState(false);
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
    const handleAddress = (e)=>{
        const{name,value} = e.target;
        setAddress({...address,[name]:value})
    }
    console.log(address);
    const submitform = ()=>{
        setAddressModal(false);
        setShowAddress(true);
    }

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
                        <main className={style.addressContainer}>
                            <p style={{fontSize:'15px',fontWeight:'600',marginBottom:'0.4rem'}}>{address.firstname} {address.lastname}</p>
                            <span>{address.address}</span>
                            <span>, {address.colony}</span>
                            <span>, {address.landmark}</span>
                            <br />
                            <span>{address.city} - </span>
                            <span>{address.pincode} </span>
                            <span> ,{address.state}</span>
                            <br />
                            <br />
                            <span style={{fontWeight:'600'}}>Mobile : </span>
                            <span>{address.phone}</span>
                            <div className={style.addressButton}>
                                <button onClick={()=>setAddressModal(true)} style={{backgroundColor:'red'}}>Change</button>
                                <button onClick={()=>setShowOrder(true)}>Delivery Here</button>
                            </div>
                            </main>
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



            <section className={style.checkoutBox}>
                    <div style={{cursor:'pointer'}}>
                        <p style={{fontWeight:'600',fontSize:'14px'}}>PAY SECURELY</p>
                    </div>
                    { showPayment &&
                        <main style={{border:'1px solid #ddd',marginTop:'2rem',backgroundColor:'#fff',padding:'1rem'}}>
                    <div style={{display:'flex',alignItems:'center',}}>
                    <span style={{margin:'2rem 1rem 1rem 1rem',color:'darkblue',fontSize:'17px',fontWeight:'600'}}>Payment Option</span>
                    <img src="https://www.reliancedigital.in/build/client/images/payment_logos_cc.gif" alt="" />
                    </div>
                    
                    <hr />
                     <form  className={style.paymentBox}>
                          <section>
                               <input type="number" name="debitCardNo" id="debitCardNo" placeholder='Enter Card Number' required/><br />
                               <input type="text" name="nameOnCard" id="nameOnCard" placeholder='Enter Name on Card'required/> <br />
                              <label style={{marginLeft:'0.7rem'}} htmlFor="date">Expire Date</label>
                               <br />
                              <input style={{width:'5rem'}} type="date" name="month" id="month" required/>
                              <input style={{width:'5rem'}} type="date" name="year" id="year" required/>
                              <input style={{width:'5rem'}} type="number" name="cvv" id="cvv"  placeholder='CVV' required/>
                          </section>
                            <p style={{fontSize:'12px',marginLeft:'0.7rem'}}>*Clicking on “Pay” will take you to a secure payment gateway where you can make your payment.
                                 Your order will not be completed without this action</p>
                            <input style={{width:'1rem'}} type="checkbox" name="check" id="check" required />
                            <label style={{fontSize:'14px'}} htmlFor="check">I agree to the Term & Conditions</label><br />
                            <button onClick={()=>setPaymentModel(true)} className={style.paymentComplete}>PAY RS. {cartData.totalPrice}</button>
                     </form>
                     </main>
                     }
            </section>
            </aside>


         { addressModal &&
            <main className={style.modal}>
            <aside className={style.addressBox}>
                <div className={style.addressHeading}>
                    <p>Enter new address</p>
                    <p onClick={()=>setAddressModal(false)} style={{cursor:'pointer'}}>x</p>
                </div>
                <form onSubmit={submitform} className={style.form}>
                    <input style={{width:'19rem'}} type="number" name="pincode" value={address.pincode} id="pincode" placeholder='Enter Pincode*' onInput={handleAddress} required/>
                    <br />
                    <input style={{width:'19rem'}} type="text" name="firstname" id="firstname" value={address.firstname} placeholder='Enter First Name*' onInput={handleAddress} required/>
                    <input style={{width:'19rem'}} type="text" name="lastname" id="lastname" value={address.lastname} placeholder='Enter Last Name*' onInput={handleAddress} required/>
                    <br />
                    <input type="text" name="address" id="address" value={address.address} placeholder='Enter Flat / Houes No. / Floor*' onInput={handleAddress} required/>
                    <br />
                    <input type="text" name="colony" id="colony" value={address.colony} placeholder='Enter Colony / Street*' onInput={handleAddress} required/>
                    <br />
                    <input type="text" name="landmark" id="landmark" value={address.landmark} placeholder='Enter landmark' onInput={handleAddress}/>
                    <br />
                    <input type="text" style={{width:'19rem'}} name="city" id="city" value={address.city}  placeholder='Enter City' onInput={handleAddress}/>
                    <input type="text" style={{width:'19rem'}} name="state" id="state" value={address.state} placeholder='Enter State' onInput={handleAddress}/>
                    <input type="number" name="phone" id="phone" placeholder='Enter Mobile Number*' value={address.phone} onInput={handleAddress} required/>
                    <input style={{width:'10rem'}} className={style.submitButton} type="submit" value="Submit" />
                </form>
            </aside>
         </main>
         }
         {paymentModel && <Payment/>}
        </main>
    )
}