import { useContext, useState } from 'react'
import style from './addHome.module.css'
import { ItemValContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
export const AddHolder = ()=>{
    const {setItemVal} = useContext(ItemValContext);
    const navigate = useNavigate();

    const allData = [
        {
            img: 'https://media.croma.com/image/upload/v1662703724/Croma%20Assets/Communication/Mobiles/Images/261934_qgssvy.png',
            name: 'Apple Phones',
            offer : 'Up to 50% Off*',
            id: 'mobile'
        },
        {
            img: 'https://media.croma.com/image/upload/v1630560619/Croma%20Assets/Miscellanous/Travel%20Accessories/Images/241131_gpotud.png',
            name: 'Travel Bags',
            offer : 'Up to 48% Off*',
            id: 'travel'
        },
        {
            img: 'https://media.croma.com/image/upload/v1689228206/Croma%20Assets/Entertainment/Television/Images/274277_vswvkw.png',
            name: 'Smart TVs',
            offer : 'Up to 38% Off*',
            id: 'tv'
        },
        {
            img: 'https://media.croma.com/image/upload/v1683615583/Croma%20Assets/Entertainment/Sound%20Bars/Images/272417_nmvi1c.png',
            name: 'Audio',
            offer : 'Up to 60% Off*',
            id: 'audio'
        },
        {
            img: 'https://media.croma.com/image/upload/v1692278495/Croma%20Assets/Large%20Appliances/Refrigerator/Images/270503_c3ttxs.png',
            name: 'Refrigerators',
            offer : 'Up to 68% Off*',
            id: 'refrigerator'
        },
        {
            img: 'https://media.croma.com/image/upload/v1670589814/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/229553_0_hgavkf.png',
            name: 'Washing Machine',
            offer : 'Up to 23%% Off*',
            id: 'washingMachine'
        },
    ]
    const handleProducts = (e)=>{
        setItemVal(e.currentTarget.id);
        navigate('/products')
    }
    
    return(
        <main className={style.mainContainer}>
            {
                allData.map((product,i)=>{
                    return(
                        <section key={i} className={style.addContainer}>
                            <div onClick={handleProducts} id={product.id} className={style.addItemDiv}>
                                <img className={style.addImage} src={product.img} alt={product.name} />
                                <p>{product.name}</p>
                                <span>{product.offer}</span>
                            </div>
                        </section>
                    )
                })
            }
        </main>
    )
}