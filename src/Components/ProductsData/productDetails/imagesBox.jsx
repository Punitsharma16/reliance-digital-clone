import { useState } from 'react';
import right from '../../svgs/right.svg'
import left from '../../svgs/left.svg'
import style from '../productDetails.module.css'
export const ProductDetailsImages = ({displayImage,images})=>{
  const [StartIndex,setStartIndex] = useState(0);

    const prevImages = ()=>{
        setStartIndex(StartIndex - 3);
      }

    const nextImages = ()=>{
        if(StartIndex + 3 < images?.length){
          setStartIndex(StartIndex + 3);
        }
      }
    return(
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
    )
}