import { Link, useNavigate } from "react-router-dom"
import cart from '../svgs/cart.svg'
import login from '../svgs/login.svg'
import style from './appNavbar.module.css'
import { useContext, useEffect, useRef, useState } from "react"
import { ValContextNavbar } from "../../App"
import { SearchData } from "../HomePage/searchData"
import { ProfileModal } from "../Profile/profileModal"
import { Login } from "../login/login"

export const AppNavbar = ()=>{
    const {setNavVal,setSearchVal} = useContext(ValContextNavbar)
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
    console.log(username);
    const handleLaptop = ()=>{
      setNavVal('laptop')
      navigate('/filterData');
    }
    const handleTablet = ()=>{
      setNavVal('tablet')
      navigate('/filterData');
    }
    const handleTv = ()=>{
      setNavVal('tv')
      navigate('/filterData');
    }
    const handleAC = ()=>{
      setNavVal('ac')
      navigate('/filterData');
    }
    const handleKitchen = ()=>{
      setNavVal('kitchenappliances')
      navigate('/filterData');
    }
    const handleRefrigerator = ()=>{
      setNavVal('refrigerator')
      navigate('/filterData');
    }

    const handleSearchInput = (e)=>{
      setSearchVal(e.target.value);
      // navigate('/searchItems')
    }

    useEffect(() => {
      const hideModal = (e) => {
        //   console.log("e.target", e.target);
        if (iconRef.current.contains(e.target)) {
          // console.log("here");
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
        // console.log('token-->',token);
      }else{
        navigate('/login');
        // console.log('login');
      }
    }
    return(
        <main>
            <section className={style.navbarHeading}>
                <div>OUR BRAND PROMISE</div>
                <hr className={style.hr} />
                <div className={style.navFilter} onClick={()=>navigate('/contact')}>CONTACT US</div>
                <hr className={style.hr} />
                <div>NEXT DAY DELIVERY</div>
            </section>
            <section className={style.searchBar}>
                <Link to='/'><img className={style.logo} src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" /></Link>
                <input type="text" name="seacrh" id="search" onChange={handleSearchInput} placeholder="Find your favorite prodcut" />
                <div style={{gap:'1rem'}}>
                    <span onClick={()=>navigate('/cartItem')} style={{color:'white',fontWeight:'600',cursor:'pointer',position:'relative'}}><img src={cart} alt="" />Cart</span>
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
                    <span className={style.navFilter} onClick={handleLaptop}>LAPTOP</span>
                    <span className={style.navFilter} onClick={handleTablet}>TABLET</span>
                    <span className={style.navFilter} onClick={handleTv}>TELEVISION</span>
                    <span className={style.navFilter} onClick={handleAC}>AC</span>
                    <span className={style.navFilter} onClick={handleKitchen}>KITCHEN APPLIANSES</span>
                    <span className={style.navFilter} onClick={handleRefrigerator}>REFRIGERATERS</span>
                </div>
            </section>
            <SearchData/>
            
        </main>
    )
}