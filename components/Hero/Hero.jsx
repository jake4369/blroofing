"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    "<span class='highlight__orange'>LB</span> Roofing <br /> & <br /> Brickwork",
    "<span class='highlight__orange'>Expert Roofing Services</span> Near You",
    "<span class='highlight__orange'>Trustworthy & Experienced</span> Roof Installers",
    "<span class='highlight__orange'>Quality Roofing Solutions</span> <br /> For Your Home",
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the active slide index, wrapping around to 0 if necessary
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides]);

  const activeSlide = slides[activeSlideIndex];

  return (
    <section className="hero-section">
      <div className="filter"></div>

      <div className="hero-section__text-carousel">
        <p
          className="carousel-text"
          dangerouslySetInnerHTML={{ __html: activeSlide }}
        />
      </div>

      <button className="hero-section__btn">Get a Quote</button>
    </section>
  );
};

export default Hero;
