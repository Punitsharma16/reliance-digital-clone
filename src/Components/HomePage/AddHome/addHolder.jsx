import { useContext, useState } from 'react'
import style from './addHome.module.css'
import { ItemValContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
export const AddHolder = ()=>{
    const {setItemVal} = useContext(ItemValContext);
    const navigate = useNavigate();
    const handlePhone = ()=>{
        setItemVal('mobile');
        navigate('/products')
    }
    const handleTravel = ()=>{
        setItemVal('travel');
        navigate('/products')
    }
    const handleTv = ()=>{
        setItemVal('tv');
        navigate('/products')
    }
    const handleAudio = ()=>{
        setItemVal('audio');
        navigate('/products')
    }
    const handleRefrigerator = ()=>{
        setItemVal('refrigerator')
        navigate('/products')
    }
    const handleWashingMachine = ()=>{
        setItemVal('washingMachine');
        navigate('/products')
    }
    return(
        <main className={style.mainContainer}>
            <section className={style.addContiner}>
                <div onClick={handlePhone} className={style.addItemDiv}>
                    <div className={style.imageDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1662703724/Croma%20Assets/Communication/Mobiles/Images/261934_qgssvy.png" alt="iPhone" />
                    </div>
                    <p>Apple Phones</p>
                    <span>Up to 50% Off*</span>
                </div>
                <div onClick={handleTravel} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1630560619/Croma%20Assets/Miscellanous/Travel%20Accessories/Images/241131_gpotud.png" alt="laptop" />
                    <p>Travel Bags</p>
                    <span>Up to 48% Off*</span>
                </div>
                <div onClick={handleTv} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1689228206/Croma%20Assets/Entertainment/Television/Images/274277_vswvkw.png" alt="LED" />
                    <p>Smart TVs</p>
                    <span>Up to 30% Off*</span>
                </div>
            </section>
            <section className={style.addContiner}>
                <div onClick={handleAudio} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1683615583/Croma%20Assets/Entertainment/Sound%20Bars/Images/272417_nmvi1c.png" alt="audio" />
                    <p>Audio</p>
                    <span>Up to 60% Off*</span>
                </div>
                <div onClick={handleRefrigerator} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1692278495/Croma%20Assets/Large%20Appliances/Refrigerator/Images/270503_c3ttxs.png" alt="refrigerator" />
                    <p>Refrigerators</p>
                    <span>Up to 67% Off*</span>
                </div>
                <div onClick={handleWashingMachine} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1670589814/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/229553_0_hgavkf.png" alt="washingMachine" />
                    <p>Washing Machine</p>
                    <span>Up to 23% Off</span>
                </div>
            </section>
        </main>
    )
}