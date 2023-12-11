import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SendValToFilter } from "../../App";
import style from '../ProductsData/products.module.css'
import { useNavigate } from "react-router-dom";
import { AddItemWishList } from "../WishList/addItemToWishlist";

export const FilteredData = ()=>{
    const [yourData,setYourData] = useState([]);
    const {navVal,setProductID} = useContext(SendValToFilter);
    const [id,setId] = useState();
    const navigate = useNavigate();
    
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
                <p style={{color:'rgb(14, 24, 109)',fontWeight:'600'}}>&#x20B9; {data.price}</p><br />
                <span className={style.offer}>OFFERS AVAILABLE</span>
                </div>
                </section>
                <AddItemWishList id={data._id}/>
              </main>
            )
          })
        }
      </section>
    </main>
    )
}