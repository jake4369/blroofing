"use client";

import { useContext } from "react";
import { ModalContext } from "@context/ModelContext";

import ServiceCard from "./ServiceCard";
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
