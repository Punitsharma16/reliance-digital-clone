import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SendValToFilter } from "../../App";
import style from '../ProductsData/products.module.css'
import { useNavigate } from "react-router-dom";
import { AddItemWishList } from "../WishList/addItemToWishlist";

export const FilteredData = ()=>{
    const [yourData,setYourData] = useState([]);
    const {navVal,setProductID} = useContext(SendValToFilter);
    const token = sessionStorage.getItem('authToken');
    const [id,setId] = useState();
    const navigate = useNavigate();
    const body = {
      "productId": `${id}`
    }
    const val = navVal;
    console.log(val);
    const fetchData = async (val) => {
        try {
          const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${val}"}&limit=100`, {
            headers: {
              'projectID': 'f2wxvt7cmknp',
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


        //   const addItemTowishlist = async(id)=>{
        //     try {
        //         const responce = await axios.patch(
        //             'https://academics.newtonschool.co/api/v1/ecommerce/wishlist',
        //             {
        //               "productId": `${id}`
        //             } ,
        //             {
        //                 headers: {
        //                 "Authorization" : `Bearer ${token}`,
        //                  "projectID" : 'f2wxvt7cmknp'
        //             }
        //         }
        //         )
        //         console.log(responce.data.message);
        //         alert(responce.data.message);
        //     } catch (error) {
        //         console.log(error);
        //         alert('Already added in wishlist');
        //     }
        // }
        // useEffect(()=>{
        //   addItemTowishlist()
        // },[id]);

          const handleId = (e)=>{
            setProductID(e.currentTarget.id)
            navigate('/productDetails');
          }
    return(
      <main>
      <section className={style.products}>
        {
          yourData.map((data,i)=>{
            return(
              <main className={style.ProductsContainer}  key={i}>
                <section onClick={handleId} id={data._id} className={style.productInfo}>
                <img className={style.productImage} src={data.displayImage} alt="" />
                <div>
                <p className={style.productName}>{data.name}</p><br />
                <p style={{color:'blue',fontWeight:'600'}}>&#x20B9; {data.price}</p><br />
                <span className={style.offer}>OFFERS AVAILABLE</span>
                </div>
                </section>
                {/* <div id={data._id} onClick={(e)=>addItemTowishlist(e.currentTarget.id)} className={style.wishList}>
                  <span><img src={heart} alt="" />Add to Wishlist</span>
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