import axios from "axios";
import { useEffect, useState } from "react";
import style from './wishlist.module.css'

export const WishList = ({productID})=>{
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    console.log(productID);
    const [wishlistData,setWishlistData] = useState([]);
    const [id, setId] = useState();
    console.log(id);

    const fetchItemFromWishlist = async()=>{
        try {
            const wishlistItem = await axios.get(
                'https://academics.newtonschool.co/api/v1/ecommerce/wishlist',
                {
                    headers: {
                    "Authorization" : `Bearer ${token}`,
                     "projectID" : 'f2wxvt7cmknp'
                }
            }
            )
            console.log(wishlistItem.data.data.items);
            setWishlistData(wishlistItem.data.data.items)
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect(()=>{
    //     addzItemTowishlist(productID);
    // },[productID])

    useEffect(()=>{
        fetchItemFromWishlist()
    },[])
    console.log(wishlistData);

    const deleteItemFromWIshlist = async ()=>{
        try {
            const responce = await axios.delete(
                `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,
                {
                    headers: {
                    "Authorization" : `Bearer ${token}`,
                     "projectID" : 'f2wxvt7cmknp'
                }
            }
            )
            console.log(responce);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    const handleId = (e)=>{
        setId(e.currentTarget.id);
    }
    useEffect(()=>{
        deleteItemFromWIshlist();
    },[id]);


    return(
        <main style={{display:"flex", flexWrap:'wrap'}}>
            {
                wishlistData.map((product,i)=>{
                    return (
                        <main className={style.itemContainer} key={i}>
                            <section>
                            <img className={style.whishlistImage} src={product.products.displayImage} alt="" />
                            <p className={style.name}>{product.products.name}</p>
                            <p className={style.price}>Offer Price : <span style={{fontSize:'18px',fontWeight:'600'}}>&#x20B9;{product.products.price}</span></p>
                            </section>
                            <div id={product.products._id} onClick={handleId}>Delete</div>
                        </main>
                    
                    )
                })
            }
        </main>
    )
}