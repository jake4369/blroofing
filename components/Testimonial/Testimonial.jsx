"use client";

import { useContext } from "react";

import { ModalContext } from "@context/ModelContext";

import Image from "next/image";
import Link from "next/link";

import Reviews from "@components/Reviews/Reviews";
import CTAButton from "@components/Shared/CTAButton";

import { secondaryReviews } from "@constants";

const Testimonial = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-section__text-content">
        <h3>Why Us?</h3>
        <p>
          LB Roofing, a family-run business with over a decade of roofing and
          building expertise, is your go-to choice in the West Midlands for
          top-notch roofing solutions. Our commitment to delivering outstanding
          quality and friendly service at competitive prices sets us apart.{" "}
          <br />{" "}
        </p>

        <div className="testimonial-section__desktop-text">
          <p>
            At LB Roofing, we are dedicated to delivering an unparalleled
            experience, ensuring excellence at every stage, from your initial
            inquiry to the meticulous aftercare process. Our commitment to
            transparency and unwavering integrity sets us apart.
          </p>

          <p>
            Roofing, an indispensable safeguard for your property against the
            UK's most inclement weather, represents a significant and enduring
            investment. To maximize the longevity and performance of your roof,
            it is paramount to select the right contractor. You have discovered
            that partner in Estates Roofing, where quality meets trust.
          </p>
        </div>

        <p>
          <strong>Trust us to beat any written quote you receive.</strong>
        </p>

        <CTAButton handleClick={openModal}>Get a Quote</CTAButton>
      </div>

      <div className="testimonial-section__reviews">
        <span>Check out our reviews on </span>
        <Link href="MyBuilder.com" target="_blank">
          MyBuilder.com
        </Link>
        <Reviews
          reviewClassname="reviews__secondary"
          reviewData={secondaryReviews}
          timer={4000}
        />
      </div>
    </section>
  );
};

export default Testimonial;
