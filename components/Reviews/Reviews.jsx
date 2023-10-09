"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FaStar } from "react-icons/fa";

const Reviews = ({ reviewClassname, reviewData, timer }) => {
  const [slides, setSlides] = useState(reviewData);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the active slide index, wrapping around to 0 if necessary
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, timer); // Change slide every 3 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <div className={`review-card ${reviewClassname}`}>
      <Image
        src="/assets/misc/mybuilder.png"
        alt=""
        width={100}
        height={100}
        className="mybuilder__logo"
      />

      <div className="review-section__stars-container">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className={`${reviewClassname}__text`}>
        {slides[activeSlideIndex].text}
      </p>

      <span className="review__author">{slides[activeSlideIndex].author}</span>
    </div>
  );
};

export default Reviews;
