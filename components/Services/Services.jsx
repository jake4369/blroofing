import ServiceCard from "./ServiceCard";
import CTAButton from "@components/Shared/CTAButton";

const Services = ({ services }) => {
  const serviceCards = services.map((service, index) => (
    <ServiceCard
      key={service.service}
      service={service.service}
      img={service.img}
      text={service.text}
      isEven={index % 2 === 0}
    />
  ));
  return (
    <section className="service-section" id="services">
      <h2>Our Services</h2>

      <section className="services__cards-container">{serviceCards}</section>

      <div className="service__contact-section">
        <p>
          Contact us for more information about our services and for your <br />
          <strong>FREE QUOTE</strong>
        </p>

        <CTAButton>Contact Us</CTAButton>
      </div>
    </section>
  );
};

export default Services;
