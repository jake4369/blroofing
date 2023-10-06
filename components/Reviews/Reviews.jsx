"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { FaStar } from "react-icons/fa";

const Reviews = ({ reviewClassname, reviewData }) => {
  const [slides, setSlides] = useState(reviewData);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the active slide index, wrapping around to 0 if necessary
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 3 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <section className={reviewClassname}>
      <div className="review-section__stars-container">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <Link
        href="https://www.mybuilder.com/profile/view/billy_700/feedback"
        target="_blank"
        className="review-section__link"
      >
        MyBuilder.com
      </Link>

      <p className={`${reviewClassname}__text`}>
        {slides[activeSlideIndex].text}
      </p>

      <span className="review__author">{slides[activeSlideIndex].author}</span>
    </section>
  );
};

export default Reviews;
