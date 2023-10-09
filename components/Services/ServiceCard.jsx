"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

const ServiceCard = ({ service, text, isEven, index }) => {
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const serviceCardClass = `service-card__flex-container ${
    isEven ? "even" : "odd"
  }`;

  useEffect(() => {
    const handleScroll = () => {
      const card = document.querySelector(`.service-card-${index}`);
      if (card) {
        const rect = card.getBoundingClientRect();
        const isCardInViewWithOffset =
          window.innerWidth < 1000
            ? rect.top + 130 < window.innerHeight && rect.bottom >= 0
            : rect.top + 50 < window.innerHeight && rect.bottom >= 0;

        if (isCardInViewWithOffset && !hasAnimated) {
          setAnimate(true);
          setHasAnimated(true);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index, hasAnimated]);

  // Dynamic class to add "slide-in-left" or "slide-in-right" based on the animate state
  const animationClass = animate
    ? isEven
      ? "slide-in-left"
      : "slide-in-right"
    : "";

  return (
    <div
      className={`service-card ${serviceCardClass} service-card-${index} ${animationClass}`}
      style={{ opacity: animate ? 1 : 0 }}
    >
      <Image
        src="/assets/services/house-icon.png"
        alt=""
        width={100}
        height={100}
        className="service-card__icon"
      />

      <div className="service-card__text-container">
        <span className="service-title">{service}</span>

        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
