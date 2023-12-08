import { useNavigate } from 'react-router-dom'
import { ValContextNavbar } from '../../App'
import facebook from '../svgs/facebook.svg'
import twitter from '../svgs/twiter.svg'
import youtube from '../svgs/youtube.svg'
import style from './footer.module.css'
import { useContext, useEffect, useState } from 'react'
export const Footer = ()=>{
    const [showModel, setShowModel] = useState(false);
    const {setNavVal} = useContext(ValContextNavbar);
    const navigate = useNavigate();

    useEffect(()=>{
        if(showModel){
          document.body.style.overflow = 'hidden';
        }else{
          document.body.style.overflow = 'unset'
        }
      })

      const handleMobile = ()=>{
        setNavVal('mobile');
        navigate('/filterData')
      }
      const handleLaptop = ()=>{
        setNavVal('laptop');
        navigate('/filterData')
      }
      const handleTv = ()=>{
        setNavVal('tv');
        navigate('/filterData')
      }
      const handleRefrigerator = ()=>{
        setNavVal('refrigerator');
        navigate('/filterData')
      }
      const handleKitchen = ()=>{
        setNavVal('kitchenappliances');
        navigate('/filterData')
      }

    return(
        <>
        <main className={style.mainContainer}>
            <section className={style.section1}>
                <div className={style.divSection1}>
                    <h4>PRODUCT CATEGORIES</h4>
                    <p onClick={handleMobile}>Smartphones</p>
                    <p onClick={handleLaptop}>Laptops</p>
                    <p onClick={handleTv}>Televsions</p>
                    <p onClick={handleRefrigerator}>Refrigerators</p>
                    <p onClick={handleKitchen}>Kitchen Appliances</p>
                </div>
                <div className={`hide {style.divSection1}`}>
                    <h4>SITE INFO</h4>
                    <p onClick={()=>setShowModel(true)}>About Reliance Digital</p>
                    <p onClick={()=>setShowModel(true)}>Site Map</p>
                    <p onClick={()=>setShowModel(true)}>Gift Cards</p>
                    <p onClick={()=>setShowModel(true)}>Contact Us</p>
                </div>
                <div className={` hide {style.divSection1}`}>
                    <h4>RESOURCES CENTER</h4>
                    <p onClick={()=>setShowModel(true)}>Product Reviews</p>
                    <p onClick={()=>setShowModel(true)}>Buying Guides</p>
                    <p onClick={()=>setShowModel(true)}>How Tos</p>
                    <p onClick={()=>setShowModel(true)}>Nearest Store</p>
                </div>
                <div className={style.divSection1}>
                    <h4>POLICES</h4>
                    <p onClick={()=>setShowModel(true)}>Terms of Use</p>
                    <p onClick={()=>setShowModel(true)}>FAQs</p>
                    <p onClick={()=>setShowModel(true)}>Cancellation and Return Policy</p>
                    <p onClick={()=>setShowModel(true)}>Privacy Policy</p>
                </div>
            </section>
            <section className={style.section2}>
                <div>
                    <h4>FOLLOW US</h4>
                    <div className={style.followUsImages}>
                        <a href='https://www.facebook.com/reliancedigital/'><img src={facebook} alt="facebook" /></a>
                        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Freliancedigital'><img src={twitter} alt="twitter" /></a>
                        <a href='https://www.youtube.com/reliancedigital'><img src={youtube} alt="youtube" /></a>
                    </div>  
                </div>
                <div className={style.section2Divs}>
                    <h4>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h4>
                    <a href='https://play.google.com/store/apps/details?id=in.digital.reliance'><img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="googlePlaystore" /></a>
                    <a href='https://apps.apple.com/in/app/reliance-digital-shopping-app/id1513379107' style={{marginLeft:'1rem'}}><img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="apple Playstore" /></a>
                </div>
            </section>
        </main>
        <main className={style.mainContainer2}>
            <p >Disclaimer</p>
            <p style={{fontSize:'14px',color:'white',margin:'0.7rem 0rem'}}>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product.
                 While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
            {/* <hr /> */}
            <p style={{borderTop:'2px solid #3d3d3d',padding:'0.5rem 0rem'}}>&#169; 2023 Reliance Digital. All Rights Reserved.</p>
        </main>
        {showModel &&
            <main className={style.model}>
                <div className={style.modelBox}>
                     <p> Feature Coming Soon...</p>
                     <button onClick={()=>setShowModel(false)}>Close</button>
                </div>
            </main>
        }
        </>
    )
}