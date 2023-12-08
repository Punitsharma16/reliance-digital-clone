import axios from "axios";
import { useContext, useEffect, useState } from "react";
import style from '../ProductsData/products.module.css'
import { useNavigate } from "react-router-dom";
import { AddItemWishList } from "../WishList/addItemToWishlist";
// import { SendValToSearchData } from "../../App";

export const SearchData = ({searchVal,setProductID})=>{
    const [data,setData] = useState([]);
    const [id,setId] = useState();
    const navigate = useNavigate();
    const token = sessionStorage.getItem('authToken');
    const body = {
      "productId": `${id}`
    }
    // const {setProductID} = useContext(ItemValContext);
    // const search = 'mobile'
    // console.log(search);
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

    const handleId = (e)=>{
      setProductID(e.currentTarget.id)
      navigate('/productDetails');
    }



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
  // useState(()=>{
  //   addItemTowishlist();
  // },[id]);

    return(
        <main>
          <section className={style.products}>
            {
              filterItems.map((data,i)=>{
                return(
                  <main  className={style.ProductsContainer}  key={i}>
                    <section onClick={handleId} id={data._id} className={style.productInfo}>

                    <img className={style.productImage} src={data.displayImage} alt="" />
                    <div>
                    <p className={style.productName}>{data.name}</p><br />
                    <p style={{color:'blue',fontWeight:'600'}}>&#x20B9; {data.price}</p><br />
                    <span className={style.offer}>OFFERS AVAILABLE</span>
                    </div>
                    </section>

                    {/* <div onClick={(e)=>addItemTowishlist(e.currentTarget.id)} id={data._id} className={style.wishList}>
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