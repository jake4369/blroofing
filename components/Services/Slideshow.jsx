"use client";

// import { useState, useEffect } from "react";

// import Image from "next/image";

// const ImageSlideshow = () => {
//   const images = [
//     "/assets/slideshow/roofing.png",
//     "/assets/slideshow/facias.png",
//     "/assets/slideshow/guttering.png",
//     "/assets/slideshow/chimney.png",
//   ];
//   const interval = 3000;
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const slideshowInterval = setInterval(() => {
//       // Increment the current image index
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, interval);

//     return () => {
//       clearInterval(slideshowInterval);
//     };
//   }, [images, interval]);

//   return (
//     <div className="slideshow">
//       <Image
//         src={images[currentImageIndex]}
//         alt={`Slide ${currentImageIndex + 1}`}
//         width={100}
//         height={100}
//         className="slideshow-img"
//       />
//     </div>
//   );
// };

// export default ImageSlideshow;

import React, { useState, useEffect } from "react";

const ImageSlideshow = () => {
  const backgroundImages = [
    "/assets/slideshow/roofing.png",
    "/assets/slideshow/facias.png",
    "/assets/slideshow/guttering.png",
    "/assets/slideshow/chimney.png",
  ];
  const interval = 3000;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      // Increment the current image index
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [backgroundImages, interval]);

  const containerStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return <div className="slideshow" style={containerStyle}></div>;
};

export default ImageSlideshow;
