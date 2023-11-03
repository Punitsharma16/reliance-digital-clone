import axios from "axios";
import { useEffect, useState } from "react";
import style from './productDetails.module.css'
import rating from '../svgs/rating.svg'
import share from '../svgs/share.svg'
import print from '../svgs/print.svg'
import tag from '../svgs/tag.svg'
import calender from '../svgs/calender.svg'
import star from '../svgs/star.svg'

export const ProductDetails = ({productID})=>{
  const [productDetails,setProductDetails] = useState({});
    const fetchProductDetails = async (productID) => {
        try {
          const response = await axios.get(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productID}`, {
            headers: {
              projectID: 'f2wxvt7cmknp',
            },
          });
      
          // Handle the response data here
          console.log(response.data.data);
          setProductDetails(response.data.data)
        } catch (error) {
          // Handle any errors here
          console.error(error);
        }
      };

      // const fetchProductReviews = async (productID) => {
      //   try {
      //     const response = await axios.post(`https://academics.newtonschool.co/api/v1/ecommerce/review/${productID}`,
      //     {
      //       reviews:'new text'
      //     }, {
      //       headers: {
      //         projectID: 'f2wxvt7cmknp',
      //       },
      //     });
      
      //     // Handle the response data here
      //     console.log(response.data.data);
      //     // setProductDetails(response.data.data)
      //   } catch (error) {
      //     // Handle any errors here
      //     console.error(error);
      //   }
      // };
      
    useEffect(()=>{
         fetchProductDetails(productID);
        //  fetchProductReviews(productID);
     },[productID])

          console.log(productDetails.brand);
      const {brand,displayImage,features, images,name,price,ratings,reviews} = productDetails;
    return(
        <main className={style.postDetailContainer}>
          <aside className={style.imageContainer}>
            <img className={style.itemImage} src={displayImage} alt="iphone" />
            <div>
             
            </div>
          </aside>
          <aside>
            <div>
            <p style={{margin:'1rem 0rem',fontWeight:'600', fontSize:'19px'}}>{name}</p>
            <span> <img src={rating} alt="rating" /> <img src={rating} alt="rating" /> <img src={rating} alt="rating" /> ({ratings} Rating & Reviews)</span>
            <span style={{margin:'2rem'}}><img src={share} alt="share" /> Share</span> <span><img src={print} alt="" /> Print</span>
            </div>
            <aside style={{display:'flex'}}>
            <section>
              <div className={style.offers}>
              <p style={{fontSize:'18px',fontWeight:'600'}}>Gain more with offers (1)</p>
              <p><img src={tag} alt="tag" /> HDFC Bank Offer: Rs.2000 HDFC Instant Bank Discount <br /> and 6 Months No Cost EMI Read-T&C</p>
              <p style={{fontSize:'18px',fontWeight:'600',marginTop:'0.5rem'}}>Save more with EMI/Cashback (1)</p>
              <p><img src={calender} alt="logo" /> EMIs (Credit Cards) from ₹2827.96/month.</p>
              </div>
              <div>
                <p style={{fontSize:'18px',fontWeight:'600'}}>Warranty</p>
                <ul style={{marginTop:'1rem'}}>
                  <li><span style={{fontSize:'17px',fontWeight:'600'}}>Warranty : </span><span>1 Year manufacturer warranty</span></li>
                </ul>
              </div>
              <div style={{marginTop:'1rem',marginBottom:'1rem'}}>
                <p style={{fontSize:'18px',fontWeight:'600'}}>Key Features</p>
                {/* <ul>{

                    features.map((i)=>{
                      return <li>{i}</li>
                    })
                  }
                </ul> */}
              </div>

              <div>
                <p style={{fontSize:'18px',fontWeight:'600',marginBottom:'1rem'}}>Return Policy</p>
                <ul>
                  <li style={{margin:'1rem 0rem 1rem 0rem'}}>For return eligibility. Read-T&C</li>
                  <li>All accessories, product & packaging need to be returned in<br /> original condition.</li>
                </ul>
              </div>
            </section>
            <section style={{marginTop:'3rem',width:'20rem'}}>
              <span>Deal Price </span><span style={{color:'darkblue',fontSize:'18px',fontWeight:'600'}}>&#8377; {price}</span>
              <p style={{fontWeight:'600',margin:'1rem 0rem'}}>EMIs (Credit Cards) from ₹2827.96/month |</p>
              <h3>Free Shipping!</h3>
              <input className={style.input} type="number" name="number" id="number" placeholder='Enter Pin Code' />
              <div>
              <p><img src={star} alt="star" /> Delivery assurance is subject to our delivery locations staying open as per govt. regulations</p>
              <button style={{backgroundColor:'red'}} className={style.button}>ADD TO CART</button>
              <button style={{backgroundColor:''}} className={style.button}>BUY NOW</button>
              </div>
            </section>
            </aside>
          </aside>
        </main>
    )
}