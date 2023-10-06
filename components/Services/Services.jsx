import ServiceCard from "./ServiceCard";

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
    <section className="service-section">
      <h2>Our Services</h2>

      <section className="services__cards-container">{serviceCards}</section>

      <div className="service__contact-section">
        <p>
          Contact for more information about our services and for a FREE QUOTE
        </p>
      </div>
    </section>
  );
};

export default Services;
