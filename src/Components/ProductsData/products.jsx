import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SendValToProduct } from "../../App";
import style from './products.module.css'
import heart from '../svgs/heart.svg'

export const Products = ()=>{
  const {itemVal} = useContext(SendValToProduct);
  const val = itemVal;
  // console.log(val);
  const [filterData,setFilterdata] = useState([]);
    const fetchProducts = async()=>{
        try {
            const products = await axios.get(
                "https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=700",
                {
                    headers: {projectID: 'f2wxvt7cmknp'}
                }
            )
            console.log(products.data);
        } catch (error) {
            console.log(error);
        }
    }


    const fetchData = async (val) => {
  try {
    const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${val}"}&limit=100`, {
      headers: {
        projectID: 'f2wxvt7cmknp',
      },
    });

    // Handle the response data here
    console.log(response.data.data);
    setFilterdata(response.data.data);
    console.log(val);
  } catch (error) {
    // Handle any errors here
    console.error(error);
    console.log(val);
  }
};

    useEffect(()=>{
        fetchProducts();
        fetchData(val);
    },[val])


    return(
        <main>
          <section className={style.products}>
            {
              filterData.map((data,i)=>{
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