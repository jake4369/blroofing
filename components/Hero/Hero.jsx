"use client";

import { useEffect, useState, useContext } from "react";

import { ModalContext } from "@context/ModelContext";

import CTAButton from "@components/Shared/CTAButton";

const Hero = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { openModal } = useContext(ModalContext);

  const slides = [
    "<span class='highlight__orange'>LB</span> Roofing <br /> <span class='highlight__orange hero__small'>West Midlands</span>",
    "<span class='highlight__orange'>Expert <br /> Roofing Services</span> Near You",
    "<span class='highlight__orange'>Trustworthy & Experienced</span> Roof Installers",
    "<span class='highlight__orange'>Quality Roofing Solutions</span> <br /> For Your Home",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the active slide index, wrapping around to 0 if necessary
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 5 seconds (adjust as needed)

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

      <CTAButton handleClick={openModal}>Get a Quote</CTAButton>
    </section>
  );
};

export default Hero;
