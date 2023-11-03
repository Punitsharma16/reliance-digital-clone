import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { SendValToProduct } from "../../App";
import style from './products.module.css'
import heart from '../svgs/heart.svg'
import { useNavigate } from "react-router-dom";

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


    const addItemTowishlist = async()=>{
      try {
          
          const responce = await axios.patch(
              'https://academics.newtonschool.co/api/v1/ecommerce/wishlist',
               body ,
              {
                  headers: {
                  "Authorization" : `Bearer ${token}`,
                   "projectID" : 'f2wxvt7cmknp'
              }
          }
          )
          console.log(responce.data.message);
          alert(responce.data.message);
      } catch (error) {
          console.log(error);
          alert('Already added in wishlist');
      }
  }
  useEffect(()=>{
    addItemTowishlist()
  },[id]);

    const handleId = (e)=>{
      setProductID(e.currentTarget.id)
      navigate('/productDetails');
    }

    const handleWishId = (e)=>{
       setId(e.currentTarget.id);
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
                    <div id={data._id} onClick={handleWishId} className={style.wishList}>
                      <span><img src={heart} alt="heart" />Add to Wishlist</span>
                    </div>
                  </main>
                    
                 
                )
              })
            }
          </section>
        </main>
    )
}