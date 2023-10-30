import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const images = [
      "https://www.reliancedigital.in/medias/Never-before-deals-on-large-Appliances-1365X260-.jpg?context=bWFzdGVyfGltYWdlc3wyODg1Mzd8aW1hZ2UvanBlZ3xpbWFnZXMvaGRhL2hiNC8xMDA2MDkwNzUxMTgzOC5qcGd8NzJiMTM0ZGM3NjBhNDcyMGQzZTQzMDQzY2MwMzc3Nzk5NTRkZTEwM2FmOWNhM2M3ODAzZjUwZTkwMWFhMzFkYg",
      "https://www.reliancedigital.in/medias/OnePlus-Banner-Nord-CE-2-Lite-5G-Banner-1365X260-.jpg?context=bWFzdGVyfGltYWdlc3wzMDM5NTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDc5L2hlNi8xMDA3MjU3NDM5NDM5OC5qcGd8NWVhMDY2MTMxZTU0YjI1NGUxNzNkNjdjNTU0MzY3OWE4MjBiYmVhNjczMDhkODcyNzdiYjYxMTc1NTJkMzNkNg",
      "https://www.reliancedigital.in/medias/TCL-Smart-TV-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3wxMjQzNzN8aW1hZ2UvanBlZ3xpbWFnZXMvaGZmL2g0YS8xMDA2MzYyNjYwMDQ3OC5qcGd8NDBhMmEyMTE4YmNhYzBiZjgyOTdjNTA0NjcxNWE1M2ZhMGYzNjMwZjNjYzRhZGYzMWFkZWVkNWNlMmUwNGM1Ng",
      "https://www.reliancedigital.in/medias/Stylish-laptop-for-a-Stylish-You-1365X260-.jpg?context=bWFzdGVyfGltYWdlc3wyOTA0ODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDM4L2gyOS8xMDA2MDkwNzc3Mzk4Mi5qcGd8ZjAwNzI0MGEzNTQxYjcxMDE0YzQxM2FlZjJjMTY0MGExZGE4NGJjNWE1NDU5OTFhMTk2OTcyZTAyZjg5NGM1OQ"
    // Add more image URLs here
  ];

  useEffect(() => {
    // Function to automatically advance the slider
    const autoAdvance = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // 2000 milliseconds (2 seconds)

    return () => {
      // Cleanup function to clear the interval when the component unmounts
      clearInterval(autoAdvance);
    };
  }, [currentIndex]);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlider;
