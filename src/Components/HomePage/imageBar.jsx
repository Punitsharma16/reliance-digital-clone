import { useState } from "react";
import style from './imageBar.module.css'
import left from '../svgs/left.svg'
import right from '../svgs/right.svg'

export const Images = () => {

    let images = [
        'https://www.reliancedigital.in/medias/LG-32-Smart-TV-Banner-1365X260PX.jpg?context=bWFzdGVyfGltYWdlc3w4MjYyNnxpbWFnZS9qcGVnfGltYWdlcy9oMjkvaGFjLzEwMDgyODMyNjQ2MTc0LmpwZ3xkY2NjNmZhNDc1YWQxMDQ3MTJjMzcxY2JlZTA0ZTY0Y2VhOGNkOTM1ZWQzYzdhOWJlNjM4MDAzNGExMzk0MGVj',
        'https://www.reliancedigital.in/medias/iPhone-15-at-72900-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wzMDg2MXxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGUzLzEwMDgyODMwMzg1MTgyLmpwZ3w3ZDBiNzcyZjk2MWZmM2I3NDUxNWU3MzczMWVhNzRlYWRhY2FkOTA4MjVlOTFmZTQxMmFiMjI4MzhjNjE1M2Uz',
        'https://www.reliancedigital.in/medias/Winter-Special-Heating-App-D.jpg?context=bWFzdGVyfGltYWdlc3wxNTUxNjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGRjL2gwNS8xMDA4MTQ2NzE3MDg0Ni5qcGd8M2Q1Mjg0NjZlMjYyNDc4YTM5MjY5NzQxNjU5MDRkZTRiYzUwYjE5ZDQ1MGYyNjM0N2YyYTQ1NGY0ZTRiZGEzMA'
    ]
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex,setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    return (
      <div className={style.contianer}>
        <button className={style.prevButton} onClick={prevImage}><img src={left} alt="prev" /></button>
        <img className={style.img} src={images[currentIndex]} alt={`Image ${currentIndex}`} />
        <button className={style.nextButton} onClick={nextImage}><img src={right} alt="next" /></button>
      </div>
    );
  };