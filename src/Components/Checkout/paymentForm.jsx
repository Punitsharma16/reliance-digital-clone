import style from './checkout.module.css'
export const PaymentBox = ({showPayment,setValFromCheckout,setPaymentModel})=>{

    const handlePaymentForm = (e)=>{
        e.preventDefault();
        setValFromCheckout(true);
        setPaymentModel(true);
    }
    
    return(
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
                     <form onSubmit={handlePaymentForm}  className={style.paymentBox}>
                          <section>
                               <input type="number" inputmode="numeric" pattern="[0-4\s]{1,5}" maxlength="16" placeholder="xxxx xxxx xxxx xxxx" required /><br />
                               <input type="text" name="nameOnCard" id="nameOnCard" placeholder='Enter Name on Card'required/> <br />
                               <label style={{marginLeft:'0.7rem'}} htmlFor="date">Expire Date</label> <br />
                               <input style={{width:'8rem'}} type="month" name="month" id="month" min="2019-01" max="2028-12" required/>
                               <input style={{width:'5rem'}} type="number" name="cvv" id="cvv" maxLength="3"  placeholder='CVV' required/>
                          </section>
                            <p style={{fontSize:'12px',marginLeft:'0.7rem'}}>*Clicking on “Pay” will take you to a secure payment gateway where you can make your payment.
                                 Your order will not be completed without this action</p>
                            <input style={{width:'1rem'}} type="checkbox" name="check" id="check" required />
                            <label style={{fontSize:'14px'}} htmlFor="check">I agree to the Term & Conditions</label><br />
                            <input type="submit" value={`PAY AMOUNT`} className={style.paymentComplete} />
                     </form>
                     </main>
                     }
            </section>
    )
}