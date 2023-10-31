import axios from "axios";
import { useContext, useEffect, useState } from "react";
import style from '../ProductsData/products.module.css'
import heart from '../svgs/heart.svg'
// import { SendValToSearchData } from "../../App";

export const SearchData = ({searchVal})=>{
    const [data,setData] = useState([]);
    // const {search} = useContext(SendValToSearchData);
    // const search = 'mobile'
    console.log(searchVal);
    const fetchProducts = async()=>{
        try {
            const products = await axios.get(
                'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?limit=700',
                {
                    headers: {projectID: 'f2wxvt7cmknp'}
                }
            )
            console.log(products.data.data);
            setData(products.data.data)
        } catch (error) {
            console.log(error);
        }
    }


    const filterItems = data.filter((item)=>{
        const subcategory = item.subCategory?item.subCategory.toLowerCase():'';
        const branditem = item.brand?item.brand.toLowerCase():'';

        return subcategory.includes(searchVal) || branditem.includes(searchVal);
    })
    console.log(filterItems);

    useEffect(()=>{
        fetchProducts();
    },[])
    return(
        <main>
          <section className={style.products}>
            {
              filterItems.map((data,i)=>{
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