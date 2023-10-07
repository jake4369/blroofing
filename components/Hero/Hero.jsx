"use client";

import { useEffect, useState } from "react";

import CTAButton from "@components/Shared/CTAButton";

const Hero = () => {
  const slides = [
    "<span class='highlight__orange'>LB</span> Roofing <br /> <span class='highlight__orange hero__small'>West Midlands</span>",
    "<span class='highlight__orange'>Expert <br /> Roofing Services</span> Near You",
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
    }, 4000); // Change slide every 5 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides]);

  const activeSlide = slides[activeSlideIndex];

  return (
    <section className="hero-section" id="home">
      <div className="filter"></div>

      <div className="hero-section__text-carousel">
        <p
          className="carousel-text"
          dangerouslySetInnerHTML={{ __html: activeSlide }}
        />
      </div>

      <CTAButton>Get a Quote</CTAButton>
    </section>
  );
};

export default Hero;
