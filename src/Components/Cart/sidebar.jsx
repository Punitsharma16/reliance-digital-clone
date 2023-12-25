import { useContext } from 'react';
import { CartItemsData } from '../../App';
import style from './cartItem.module.css'
import { useNavigate } from 'react-router-dom';
export const Sidebox = ({cartItems})=>{
    const {setCartVal} = useContext(CartItemsData);
    const navigate = useNavigate();
    const token = sessionStorage.getItem('authToken')

    const handleCheckOut = (token)=>{
        if(token){
            setCartVal(cartItems)
            navigate('/checkout')
        }else{
            navigate('/login');
        }
    }
    return(
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
    )
}