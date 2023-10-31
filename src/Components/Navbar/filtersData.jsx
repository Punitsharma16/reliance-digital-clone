import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SendValToFilter } from "../../App";
import style from '../ProductsData/products.module.css'
import heart from '../svgs/heart.svg'

export const FilteredData = ()=>{
    const [yourData,setYourData] = useState([]);
    const {navVal} = useContext(SendValToFilter);
    const val = navVal;
    console.log(val);
    const fetchData = async (val) => {
        try {
          const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${val}"}&limit=100`, {
            headers: {
              projectID: 'f2wxvt7cmknp',
            },
          });
      
          // Handle the response data here
          console.log(response.data.data);
          setYourData(response.data.data);
        } catch (error) {
          // Handle any errors here
          console.error(error);
          console.log(val);
        }
      };
      
          useEffect(()=>{
              fetchData(val);
          },[val])
    return(
      <main>
      <section className={style.products}>
        {
          yourData.map((data,i)=>{
            return(
              <main className={style.ProductsContainer} key={i}>
                <img className={style.productImage} src={data.displayImage} alt="" />
                <section className={style.productInfo}>
                <p className={style.productName}>{data.name}</p><br />
                <p style={{color:'blue',fontWeight:'600'}}>&#x20B9; {data.price}</p><br />
                <span className={style.offer}>OFFERS AVAILABLE</span>
                <div className={style.wishList}>
                  <span><img src={heart} alt="" />Add to Wishlist</span>
                </div>
                </section>
              </main>
            )
          })
        }
      </section>
    </main>
    )
}