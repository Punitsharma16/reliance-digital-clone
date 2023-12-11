import { useEffect, useState } from 'react'
import style from './myprofile.module.css'
import credit from '../svgs/home.svg'
import cart from '../svgs/blackCart.svg'
import wishlist from '../svgs/heart.svg'
import address from '../svgs/address.svg'
import logout from '../svgs/logout.svg'
import { useNavigate } from 'react-router-dom'
export const MyProfile = ()=>{
    const [userDetails,setUserDetails] = useState({});
    const [name,setName] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const user = sessionStorage.getItem('userInfo');
        const userData = JSON.parse(user);
        setName(userData.name)
        setUserDetails(userData);
    },[])
    console.log(userDetails);
    const beforeSpace = name.split(' ')[0];
    const afterSpace = name.split(' ').slice(1).join(' ')
    return(
        <main className={style.mainContainer}>
            <section>
                <aside>
                    <div className={style.div1}>
                        <p style={{fontWeight:'600'}}>{userDetails.name}</p>
                        <p style={{fontWeight:'400',fontSize:'15px'}}>{userDetails.email}</p>
                    </div>
                    <div className={`hide ${style.div2}`}>
                        <p onClick={()=>navigate('/')}> <img src={credit} alt="acc.." /> Home</p>
                        <p onClick={()=>navigate('/cartItem')}> <img src={cart} alt="cart.." /> My Cart</p>
                        <p onClick={()=>navigate('/wishlist')}> <img src={wishlist} alt="heart" />My WishList</p>
                        <p onClick={()=>navigate('/contact')}> <img src={address} alt="add.." />Contact Us</p>
                        <p onClick={()=>sessionStorage.clear()}> <img src={logout} alt="" />Logout</p>
                    </div>
                </aside>
            </section>
            <section className={style.section2}>
                <p className={style.section2Heading}>Personal Information <span> (*Mandatory Fields)</span></p>
                <aside className={style.namesFirstAndLast} style={{display:'flex'}}>
                <div className={style.inputDivs}>
                    <label htmlFor="firstName">Enter First Name</label><br />
                    <input style={{cursor:'not-allowed'}} type="text" name="firstName" value={beforeSpace} readOnly={true} id="firstName" disabled/>
                </div>
                <div className={style.inputDivs}>
                    <label htmlFor="lastName">Enter Last Name</label><br />
                    <input style={{cursor:'not-allowed'}} type="text" name="lastName" readOnly={true} value={afterSpace} id="lastName" disabled /><br />
                </div>
                </aside>
                <div className={style.inputDivs}>
                    <label htmlFor="dateOfBirth">Your Date of Birth </label><br />
                    <input type="date" name="dateOfBirth" id="dateOfBirth" />
                </div>
                
                <aside style={{display:'flex',fontSize:'18px',fontWeight:'600',color:'rgb(14, 24, 109)',marginBottom:'2rem'}}>
                    <div>
                        <input type="radio" name="gender" id="male" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" id="Female" />
                        <label htmlFor="Female">Female</label>
                    </div>
                </aside>
                <div className={style.inputDivs}>
                    <label htmlFor="email">Enter Email Address</label><br />
                    <input style={{cursor:'not-allowed'}} className={style.bottomInputs} readOnly={true} value={userDetails.email} type="email" name="email" id="email" disabled/><br />
                </div>
                <p style={{marginTop:'1rem',color:'red'}}>Change of anything is not available, We will update shortly.</p>
            </section>
        </main>
    )
}