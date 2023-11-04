import { Link, useNavigate } from "react-router-dom"
import cart from '../svgs/cart.svg'
import login from '../svgs/login.svg'
import style from './appNavbar.module.css'
import { useContext, useState } from "react"
import { ValContextNavbar } from "../../App"
import { SearchData } from "../HomePage/searchData"

export const AppNavbar = ()=>{
    const {setNavVal,setSearchVal} = useContext(ValContextNavbar)
    const navigate = useNavigate();
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
                <Link to='/home'><img className={style.logo} src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" /></Link>
                <input type="text" name="seacrh" id="search" onChange={handleSearchInput} placeholder="Find your favorite prodcut" />
                <div style={{gap:'1rem'}}>
                    <Link style={{color:'white',fontWeight:'600'}}><img src={cart} alt="" />Cart</Link>
                    <Link style={{color:'white',fontWeight:'600'}}> <img src={login} alt="" />Login</Link>
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