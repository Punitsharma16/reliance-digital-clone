import axios from "axios";
import { useEffect, useState } from "react";
import style from './productDetails.module.css'
import rating from '../svgs/rating.svg'
import share from '../svgs/share.svg'
import print from '../svgs/print.svg'
import tag from '../svgs/tag.svg'
import calender from '../svgs/calender.svg'
import star from '../svgs/star.svg'
import { useNavigate } from "react-router-dom";
import right from '../svgs/right.svg'
import left from '../svgs/left.svg'
// import { SendValToProduct } from "../../App";

export const ProductDetails = ({productID,setOrderVal,setBuyNow})=>{
  const [productDetails,setProductDetails] = useState({});
  const token = sessionStorage.getItem("authToken")
  const navigate = useNavigate();
  const [StartIndex,setStartIndex] = useState(0);
  const [isLoader,setIsLoader] = useState(true);
  const prevImages = ()=>{
    setStartIndex(StartIndex - 3);
  }
 
    const fetchProductDetails = async (productID) => {
        try {
          setIsLoader(true);
          const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productID}`, {
            headers: {
              projectID: 'f2wxvt7cmknp',
            },
          });
      
          // Handle the response data here
          console.log(response.data.data);
          sessionStorage.setItem('cartItems',JSON.stringify(response.data.data));
          setProductDetails(response.data.data);
          // setCartVal(response.data.data)
        } catch (error) {
          // Handle any errors here
          console.error(error);
        } finally{
          setIsLoader(false);
        }
      };

    useEffect(()=>{
         fetchProductDetails(productID);
     },[productID])
     console.log(productID);

          // console.log(productDetails.brand);
      const {brand,displayImage,features, images,name,price,ratings,reviews,seller,description,_id} = productDetails;
      console.log(_id);
      const nextImages = ()=>{
        if(StartIndex + 3 < images?.length){
          setStartIndex(StartIndex + 3);
        }
      }

      const addItemToCart = async(id)=>{
        try {
          const res = await axios.patch(
            `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
            {
              "quantity": '1'
            } ,
            {
                headers: {
                "Authorization" : `Bearer ${token}`,
                 "projectID" : 'f2wxvt7cmknp'
            }
        }
          )
          console.log(res);
          alert(res.data.message)
          navigate('/cartItem')
        } catch (error) {
          console.log(error);
          navigate('/login')
        }
      }


      const handleBuyNow = (token,_id)=>{
        if(!token){
          navigate('/login');
        }else{
          setBuyNow(true);
          navigate('/checkout');
        }
      }

    return(
      <>
        <main className={style.postDetailContainer}>
          <aside className={style.imageContainer}>
            <img className={style.itemImage} src={displayImage} alt="iphone" />
            <div className={style.images}>
              <button className="hide" onClick={prevImages} disabled={StartIndex === 0}> <img style={{height:'1rem',width:'1rem',padding:'1rem 0rem'}} src={left} alt="prev" /></button>
              {
                images?.slice(StartIndex,StartIndex+3).map((img,i)=>{
                  return (
                    <main key={i} className={style.images}>
                        <img className="hide" src={img} alt="img" /><br />
                    </main>
                  )
                })
              }
              <button className="hide" onClick={nextImages} disabled={StartIndex+3 >= images?.length}> <img style={{height:'1rem',width:"1rem",padding:'1rem 0rem'}} src={right} alt="next" /></button>
            </div>
          </aside>

          <aside>
            <div className={style.nameRating}>
            <p style={{margin:'1rem 0rem',fontWeight:'600', fontSize:'19px'}}>{name}</p>
            <span> <img src={rating} alt="rating" /> <img src={rating} alt="rating" /> <img src={rating} alt="rating" /> ({ratings} Rating & Reviews)</span>
            <span style={{margin:'2rem'}}><img src={share} alt="share" /> Share</span> <span className="hide"><img src={print} alt="" /> Print</span>
            </div>
            
            <aside className={style.asideConatiner} style={{display:'flex'}}>
            <section>
              <div className={style.offers}>
              <p style={{fontSize:'18px',fontWeight:'600'}}>Gain more with offers (1)</p>
              <p><img src={tag} alt="tag" /> HDFC Bank Offer: Rs.2000 HDFC Instant Bank Discount <br /> and 6 Months No Cost EMI Read-T&C</p>
              <p style={{fontSize:'18px',fontWeight:'600',marginTop:'0.5rem'}}>Save more with EMI/Cashback (1)</p>
              <p><img src={calender} alt="logo" /> EMIs (Credit Cards) from ₹2827.96/month.</p>
              </div>
              <div>
                {/* <p className="hide" style={{fontSize:'18px',fontWeight:'600'}}>Warranty</p> */}
                <ul style={{marginTop:'1rem'}}>
                  <li><span style={{fontSize:'17px',fontWeight:'600'}}>Warranty : </span><span>1 Year manufacturer warranty</span></li>
                </ul>
              </div>
              <div style={{marginTop:'1rem',marginBottom:'1rem'}}>
                <p className="hide" style={{fontSize:'18px',fontWeight:'600'}}>Key Features</p>
                {
                  features?.map((item,i)=>{
                    return <p className="hide" key={i}>{item}</p>
                  })
                }
                {/* {features} */}
              </div>

              <div className={style.returnPolicy}>
                <p style={{fontSize:'18px',fontWeight:'600',marginBottom:'1rem'}}>Return Policy</p>
                <ul>
                  <li style={{margin:'1rem 0rem 1rem 0rem'}}>For return eligibility. Read-T&C</li>
                  <li>All accessories, product & packaging need to be returned in<br /> original condition.</li>
                </ul>
              </div>
            </section>
            </aside>
          </aside>
          <section style={{margin:'3rem 0rem 0rem 1rem',width:'20rem'}}>
              <span>Deal Price </span><span style={{color:'darkblue',fontSize:'18px',fontWeight:'600'}}>&#8377; {price}</span>
              <p style={{fontWeight:'600',margin:'1rem 0rem'}}>EMIs (Credit Cards) from ₹2827.96/month |</p>
              <h3>Free Shipping!</h3>
              <input className={style.input} type="number" name="number" id="number" placeholder='Enter Pin Code' />
              <p><img src={star} alt="star" /> Delivery assurance is subject to our delivery locations staying open as per govt. regulations</p>
              <div style={{display:'flex'}}>
              <p onClick={(e)=>addItemToCart(_id)} style={{backgroundColor:'red'}} className={style.button}>ADD TO CART</p>
              <button onClick={()=>handleBuyNow(_id)} style={{backgroundColor:''}} className={style.button}>BUY NOW</button>
              </div>
            </section>
        </main>




        <main className={style.descriptionContainer}>
          <p style={{margin:'3rem 1rem 1rem 0rem',padding:'1rem',fontSize:'18px',fontWeight:'600',backgroundColor:'rgb(226, 234, 236)'}}> Description </p>
          <div className={style.descriptionImage}>
            {
              images?.map((img,i)=>{
                return (
                <main key={i}>
                  <img src={img} alt="img" /><br />
                 </main>
                )
              })
            }
          </div>
          <p style={{margin:'3rem 1rem 1rem 1rem', fontSize:'18px'}}>{name}</p>
          <hr />
          <div>
              <p style={{fontSize:'20px',fontWeight:'600',padding:'1rem'}}>Specifications ({name})</p>
              <p style={{fontSize:'17px',fontWeight:'600',padding:'0.5rem',backgroundColor:'rgb(226, 234, 236)'}}>General Information</p>
              <p style={{padding:'0.1rem'}}>Seller : {seller?.name}</p>
              <p style={{padding:'0.1rem'}}>Brand : {brand}</p>
          </div>
          
          <div style={{marginTop:'1rem'}}>
            <p style={{fontSize:'17px',fontWeight:'600',padding:'0.5rem',backgroundColor:'rgb(226, 234, 236)',marginTop:'2rem'}}>In The Box & Warranty</p>
            <div style={{display:'flex',justifyContent:'space-between',padding:'0.5rem',width:'80%'}}>
              <p>Warranty</p>
            <p>1 Year</p>
            </div>
            <div>
              <p style={{fontSize:'17px',fontWeight:'600',padding:'0.5rem',marginTop:'1rem',backgroundColor:'rgb(226, 234, 236)'}}>Features</p>
              {
                features?.map((item,i)=>{
                  return (
                    <ul key={i} style={{margin:'1rem'}}>
                      <li style={{marginLeft:'1rem'}}>{item}</li>
                    </ul>
                  )
                })
              }
            </div>
          </div>
          <div>
            <p style={{fontSize:'17px',fontWeight:'600',padding:'0.5rem',backgroundColor:'rgb(226, 234, 236)',marginTop:'2rem'}}>Manufacturing & Packing Information</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.5rem'}}>
              <p>Customer care address</p>
              <p>Reliance Digital, Reliance Retail Limited,<br />
                 3rd Floor, Court House, Lokmanya Tilak Marg,<br />
                 Dhobi Talao, Mumbai-400 002, Maharashtra, India.
              </p>
            </div>
            <hr />
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',padding:'0.5rem'}}>
              <p>Customer care Phone</p>
              <p>1800-889-1061</p>
            </div>
            <hr />
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',padding:'0.5rem'}}>
              <p>Customer care email</p>
              <p>reliancedigital@ril.com</p>
            </div>
            <hr />
            <div style={{display:'flex',justifyContent:'space-between',width:'80%',padding:'0.5rem'}}>
              <p>Country of origin</p>
              <p>China</p>
            </div>
            <hr />
          </div>
        </main>
      </>
      
    )
}