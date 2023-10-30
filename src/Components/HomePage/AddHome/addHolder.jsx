import { useContext, useState } from 'react'
import style from './addHome.module.css'
import { ItemValContext } from '../../../App';
export const AddHolder = ()=>{
    const {setItemVal} = useContext(ItemValContext);
    return(
        <main className={style.mainContainer}>
            <section className={style.addContiner}>
                <div onClick={()=>setItemVal('mobile')} className={style.addItemDiv}>
                    <div className={style.imageDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1662703724/Croma%20Assets/Communication/Mobiles/Images/261934_qgssvy.png" alt="iPhone" />
                    </div>
                    <p>Apple Phones</p>
                    <span>Up to 50% Off*</span>
                </div>
                <div onClick={()=>setItemVal('laptop')} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1662553848/Croma%20Assets/Computers%20Peripherals/Laptop/Images/261170_u7tfva.png" alt="laptop" />
                    <p>Laptops</p>
                    <span>Up to 48% Off*</span>
                </div>
                <div onClick={()=>setItemVal('tv')} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1689228206/Croma%20Assets/Entertainment/Television/Images/274277_vswvkw.png" alt="LED" />
                    <p>Smart TVs</p>
                    <span>Up to 30% Off*</span>
                </div>
            </section>
            <section className={style.addContiner}>
                <div onClick={()=>setItemVal('audio')} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1683615583/Croma%20Assets/Entertainment/Sound%20Bars/Images/272417_nmvi1c.png" alt="audio" />
                    <p>Audio</p>
                    <span>Up to 60% Off*</span>
                </div>
                <div onClick={()=>setItemVal('refrigerator')} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1692278495/Croma%20Assets/Large%20Appliances/Refrigerator/Images/270503_c3ttxs.png" alt="refrigerator" />
                    <p>Refrigerators</p>
                    <span>Up to 67% Off*</span>
                </div>
                <div onClick={()=>setItemVal('washingMachine')} className={style.addItemDiv}>
                    <img className={style.addImage} src="https://media.croma.com/image/upload/v1670589814/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/229553_0_hgavkf.png" alt="washingMachine" />
                    <p>Washing Machine</p>
                    <span>Up to 23% Off</span>
                </div>
            </section>
        </main>
    )
}