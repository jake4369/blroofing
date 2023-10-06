import Image from "next/image";

const ServiceCard = ({ service, text, img, isEven }) => {
  const serviceCardClass = `service-card__flex-container ${
    isEven ? "even" : "odd"
  }`;

  return (
    <div className={`service-card ${serviceCardClass}`}>
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
