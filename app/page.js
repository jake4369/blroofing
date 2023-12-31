"use client";

import { useContext } from "react";

import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Reviews from "@components/Reviews/Reviews";
import ImageDivider from "@components/ImageDivider/ImageDivider";
import Services from "@components/Services/Services";
import Testimonial from "@components/Testimonial/Testimonial";
import Modal from "@components/Modal/Modal";
import TextScroller from "@components/TextScroller/TextScroller";

import { ModalContext } from "@context/ModelContext";

import { primaryReviews, services } from "@constants";

const Home = () => {
  const { modalOpen } = useContext(ModalContext);
  return (
    <main id="home">
      <Hero />
      <About />
      <Reviews
        reviewClassname="reviews__primary"
        reviewData={primaryReviews}
        timer={2500}
      />
      <ImageDivider dividerClassname="img-divider__primary" />
      <Services services={services} />
      <ImageDivider dividerClassname="img-divider_secondary" />
      <Testimonial />
      <TextScroller />
      {modalOpen && <Modal />}
    </main>
  );
};

export default Home;
