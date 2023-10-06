"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [slides, setSlides] = useState([
    "LB Roofing <br /> & <br /> Brickwork",
    "Expert Roofing Services Near You",
    "Trustworthy and Experienced Roof Installers",
    "Quality Roofing Solutions for Your Home",
  ]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the active slide index, wrapping around to 0 if necessary
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <section className="hero-section">
      <div className="filter"></div>

      <div className="hero-section__text-carousel">
        <p
          className="carousel-text"
          dangerouslySetInnerHTML={{ __html: slides[activeSlideIndex] }}
        ></p>
      </div>

      <button className="hero-section__btn">Get a Quote</button>
    </section>
  );
};

export default Hero;
