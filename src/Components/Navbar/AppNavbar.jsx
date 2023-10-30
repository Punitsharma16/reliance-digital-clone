import { Link } from "react-router-dom"
import cart from '../svgs/cart.svg'
import login from '../svgs/login.svg'
import style from './appNavbar.module.css'
import { useContext, useEffect, useRef, useState } from "react"
import { ValContextNavbar } from "../../App"

export const AppNavbar = ()=>{
    const [mobileModal,setMobileModal] = useState(false);
    const {setNavVal,setNavVal2} = useContext(ValContextNavbar)
    const mobileRef = useRef(null);
    useEffect(() => {
        const hideModal = (e) => {
          //   console.log("e.target", e.target);
          if (mobileRef.current.contains(e.target)) {
            // console.log("here");
            return;
          }
          setMobileModal(false);
        };
        document.addEventListener("click", hideModal);
        return () => {
          document.removeEventListener("click", hideModal);
        };
      }, []);
      const handleMobileApple = ()=>{
        setNavVal('mobile');
        setNavVal2('Apple')
      }
      const handleMobileOnePlus = ()=>{
        setNavVal('mobile')
        setNavVal2('OnePlus')
      }
    return(
        <main>
            <section className={style.navbarHeading}>
                <div>OUR BRAND PROMISE</div>
                <hr className={style.hr} />
                <div>CONTACT US</div>
                <hr className={style.hr} />
                <div>NEXT DAY DELIVERY</div>
            </section>
            <section className={style.searchBar}>
                <img className={style.logo} src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
                <input type="text" name="seacrh" id="search" placeholder="Find your favorite prodcut" />
                <div style={{gap:'1rem'}}>
                    <Link style={{color:'white',fontWeight:'600'}}><img src={cart} alt="" />Cart</Link>
                    <Link style={{color:'white',fontWeight:'600'}}> <img src={login} alt="" />Login</Link>
                </div>
            </section>
            <section>
                <div className={style.filters}>
                    <span className={style.navHead}
                     onClick={()=>setMobileModal(!mobileModal)}
                     ref={mobileRef}
                     >MOBILE</span>
                    <span>TABLET</span>
                    <span>TELEVISION</span>
                    <span>AUDIO</span>
                    <span>KITCHEN APPLIANSES</span>
                    <span>REFRIGERATERS</span>
                </div>
            </section>
            <section>
                { mobileModal &&
                <div className={style.mobileModal}>
                    <p onClick={handleMobileApple}>Apple</p>
                    <p onClick={handleMobileOnePlus}>OnePlus</p>
                </div>
                }
            </section>
        </main>
    )
}