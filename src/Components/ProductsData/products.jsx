import axios from "axios";
import {useContext, useEffect, useState } from "react";
import { SendValToProduct } from "../../App";
import style from './products.module.css'
import heart from '../svgs/heart.svg'
import { useNavigate } from "react-router-dom";
import { AddItemWishList } from "../WishList/addItemToWishlist";

export const Products = ()=>{
  const {itemVal,setProductID} = useContext(SendValToProduct);
  const navigate = useNavigate();
  const val = itemVal;
  // console.log(val);
  const [id, setId] = useState('');
  const token = sessionStorage.getItem('authToken');
  const body = {
    "productId": `${id}`
  }

  const [filterData,setFilterdata] = useState([]);
    
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
        fetchData(val);
    },[val])

    const handleId = (e)=>{
      setProductID(e.currentTarget.id)
      navigate('/productDetails');
    }

    return(
        <main>
          <section className={style.products}>
            {
              filterData.map((data)=>{
                return(
                  <main className={style.ProductsContainer} key={data._id}>
                    
                    <section id={data._id} onClick={handleId} className={style.productInfo}>
                    <img className={style.productImage} src={data.displayImage} alt="" />
                    <p className={style.productName}>{data.name}</p><br />
                    <p style={{color:'blue',fontWeight:'600'}}>&#x20B9; {data.price}</p><br />
                    <span className={style.offer}>OFFERS AVAILABLE</span>
                    </section>
                    {/* <div id={data._id} onClick={(e)=>addItemTowishlist(e.currentTarget.id)} className={style.wishList}>
                      <span><img src={heart} alt="heart" />Add to Wishlist</span>
                    </div> */}
                    <AddItemWishList id={data._id}/>
                  </main>
                    
                 
                )
              })
            }
          </section>
        </main>
    )
}