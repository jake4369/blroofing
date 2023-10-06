"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [slides, setSlides] = useState([
    "LB Roofing & Brickwork",
    "Professional Roofing Specialists",
    "Trusted, Expert Installers",
  ]);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the active slide index, wrapping around to 0 if necessary
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <section className="hero-section">
      <div className="filter"></div>

      <div className="hero-section__text-carousel">
        <p className="carousel-text">{slides[activeSlideIndex]}</p>
      </div>

      <button>Get a Quote</button>
    </section>
  );
};

export default Hero;
