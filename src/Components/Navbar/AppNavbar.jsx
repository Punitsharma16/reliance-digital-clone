import { Link, useNavigate } from "react-router-dom"
import cart from '../svgs/cart.svg'
import login from '../svgs/login.svg'
import style from './appNavbar.module.css'
import { useContext, useEffect, useRef, useState } from "react"
import { ValContextNavbar } from "../../App"
import { ProfileModal } from "../Profile/profileModal"

export const AppNavbar = ()=>{
    const {setItemVal,setSearchVal} = useContext(ValContextNavbar)
    const [showModal,setShowModal] = useState(false);
    const iconRef = useRef(null);
    const navigate = useNavigate();
    const token = sessionStorage.getItem('authToken')
    const [username,setName] = useState('');


    useEffect(()=>{
      const userData = sessionStorage.getItem('userInfo');
      if(userData){
        const dataObject = JSON.parse(userData);
         const {name} = dataObject;
         setName(name);
        }  
     },[])

    const filterFromNavbar = (value)=>{
      setItemVal(value)
      navigate('/products');
    }
    
    const handleSearchInput = (e)=>{
      setSearchVal(e.target.value);
      navigate('/searchItem')
    }
    
    
    useEffect(() => {
      const hideModal = (e) => {
        if (iconRef.current.contains(e.target)) {
          return;
        }
        setShowModal(false);
      };
      document.addEventListener("click", hideModal);
      return () => {
        document.removeEventListener("click", hideModal);
      };
    }, []);


    const handleProfileIcon = (token)=>{
      if(token){
        setShowModal(!showModal)
      }else{
        navigate('/login');
      }
    }

    const handleCart = (token)=>{
      if(token){
        navigate('/cartItem')
      }else{
        navigate('/login')
      }
    }
    return(
        <main>
            <section className={style.navbarHeading}>
                <div className="hide">OUR BRAND PROMISE</div>
                <hr className={style.hr} />
                <div className={style.navFilter} onClick={()=>navigate('/contact')}>CONTACT US</div>
                <hr className={style.hr} />
                <div className="hide">NEXT DAY DELIVERY</div>
            </section>
            <section className={style.searchBar}>
                <Link to='/'><img className={style.logo} src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" /></Link>
                <input type="text" name="seacrh" id="search" onChange={handleSearchInput} placeholder="Find your favorite prodcut" />
                    <div style={{gap:'1rem'}}>
                        <span onClick={()=>handleCart(token)} style={{color:'white',fontWeight:'600',cursor:'pointer',position:'relative'}}><img src={cart} alt="" />Cart</span>
                        <span onClick={()=>handleProfileIcon(token)} ref={iconRef} style={{color:'white',fontWeight:'600',cursor:'pointer',marginLeft:'1rem'}}> <img src={login} alt="" />{token ? `${username}` : ' Login'}</span>
                        { showModal &&
                            <section className={style.authModal}>
                                 <ProfileModal/>
                            </section>
                        }
                   </div>
            </section>
            <section>
                <div className={style.filters}>
                    <span className={style.navFilter} onClick={()=>filterFromNavbar('laptop')}>LAPTOP</span>
                    <span className={style.navFilter} onClick={()=>filterFromNavbar('tablet')}>TABLET</span>
                    <span className={style.navFilter} onClick={()=>filterFromNavbar('tv')}>TELEVISION</span>
                    <span className={style.navFilter} onClick={()=>filterFromNavbar('ac')}>AC</span>
                    <span className={`hide ${style.navFilter}`} onClick={()=>filterFromNavbar('kitchenappliances')}>KITCHEN APPLIANSES</span>
                    <span className={`hide ${style.navFilter}`} onClick={()=>filterFromNavbar('refrigerator')}>REFRIGERATERS</span>
                    <span className={style.navFilter} onClick={()=>filterFromNavbar('travel')}>TRAVEL</span>
                </div>
            </section>            
        </main>
    )
}