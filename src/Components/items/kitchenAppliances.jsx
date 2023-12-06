import axios from "axios";
import { useContext, useEffect, useState } from "react";
import style from './laptop.module.css'
import left from '../svgs/left.svg'
import right from '../svgs/right.svg'
import { SendValToFilter } from "../../App";
import { useNavigate } from "react-router-dom";

export const Kitchenappliances = ()=>{
    const [kitchenData,setKitchenData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const {setProductID} = useContext(SendValToFilter);
    const navigate = useNavigate();
    const itemsPerPage = 5;

    const fetchData = async () => {
        try {
          const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"kitchenappliances"}&limit=100`, {
            headers: {
              projectID: 'f2wxvt7cmknp',
            },
          });
      
          // Handle the response data here
          console.log(response.data.data);
          setKitchenData(response.data.data);
        } catch (error) {
          // Handle any errors here
          console.error(error);
        }
      };

      useEffect(()=>{
        fetchData();
      },[]);

  
      const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
      };
    
      const handleShowPrevious = () => {
        if (currentPage > 1) {
          setCurrentPage(prevPage => prevPage - 1);
        }
      };
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedData = kitchenData.slice(startIndex, endIndex);
console.log(displayedData);


  const handleFilter = (e)=>{
    // setProductID(e.currentTarget.id)
    navigate('/productDetails');
  }




    return(
        <main style={{display:'flex',alignItems:'center',margin:'1rem 0rem',backgroundColor:'#fff',borderRadius:'0.5rem'}}>
            <button className={style.button} onClick={handleShowPrevious}><img src={left} alt="prev" /></button>
            {
                displayedData.map((item)=>{
                    return(
                        <main key={item._id} className={style.mainContainer}>
                            <section>
                                <img className={style.img} src={item.displayImage} alt="" />
                                <div className={style.divForName}>
                                    <p className={style.name}>{item.name}</p>
                                </div>
                                <span>Brand : {item.brand}</span><br />
                                <span>Deal Price : <span style={{fontWeight:'500',fontSize:'15px',color:'#3d3d3d'}}>&#x20B9; {item.price}</span></span>
                                <p className={style.offerTag}>OFFERS AVAILABLE</p>
                            </section>
                        </main>
                    )
                })
            }
            <button className={style.button} onClick={handleLoadMore}><img src={right} alt="next" /></button>
        </main>
    )
}
