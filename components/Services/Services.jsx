"use client";

import { useContext } from "react";
import { ModalContext } from "@context/ModelContext";

import ServiceCard from "./ServiceCard";
import Slideshow from "./Slideshow";
import CTAButton from "@components/Shared/CTAButton";

const Services = ({ services }) => {
  const { openModal } = useContext(ModalContext);

  const serviceCards = services.map((service, index) => (
    <ServiceCard
      key={service.service}
      service={service.service}
      text={service.text}
      isEven={index % 2 === 0}
      index={index}
    />
  ));
  return (
    <section className="service-section" id="services">
      <h2>Our Services</h2>

      <p className="service-section__intro">
        Elevate your home's beauty, functionality, and longevity with our
        comprehensive range of expert roofing and exterior services. From
        enhancing aesthetics to safeguarding against damage, we've got you
        covered. Discover how we can transform your property today.
      </p>

      <section className="services__cards-container">
        <div className="services__filter"></div>
        {serviceCards}
      </section>

      <Slideshow />

      {/*      <p className="service-section__outro-paragraph">
        At LB Roofing, we've got you covered from A to Z when it comes to your
        roofing needs. Whether it's <strong>general roof repairs</strong>,
        <strong> installing a brand-new roof</strong>,{" "}
        <strong>handling emergency situations</strong>, or expertly crafting
        <strong>lead work</strong> and <strong>flashing</strong>, we've got it
        all checked off. We also take care of <strong>cladding</strong>,{" "}
        <strong>fascias</strong>, <strong>soffits</strong>,
        <strong>guttering systems</strong>, and provide top-notch{" "}
        <strong>flat</strong>, <strong>pitched</strong>, and{" "}
        <strong>felt roofing solutions</strong>. Our skilled team specializes in
        <strong>chimney work</strong>, <strong>asbestos removal</strong>, and{" "}
        <strong>roof cleaning</strong> to ensure the longevity and beauty of
        your home. Your roof's well-being is our priority, and we're here to
        deliver excellence in every aspect of roofing.
  </p>*/}

      <p className="service-section__outro-paragraph">
        Explore a complete roofing solution, including{" "}
        <strong>general repairs</strong>, <strong>new roofs</strong>,{" "}
        <strong>emergency services</strong>, <strong>lead work</strong>,{" "}
        <strong>cladding</strong>, <strong>guttering</strong>,{" "}
        <strong>flat and pitched roofing</strong>, <strong>chimney care</strong>
        , <strong>asbestos removal</strong>, and <strong>roof cleaning</strong>.
        We've got your roof covered!
      </p>

      <div className="service__contact-section">
        <p>
          Contact us for more information about our services and for your <br />
          <strong>FREE QUOTE</strong>
        </p>

        <CTAButton
          handleClick={openModal}
          ariaLabel="Click here to find our contact information"
        >
          Contact Us
        </CTAButton>
      </div>
    </section>
  );
};

export default Services;
