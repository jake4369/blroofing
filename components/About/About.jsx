import Image from "next/image";
import Modal from "@components/Modal/Modal";

const About = () => {
  return (
    <section className="about-section" id="about">
      <Image
        src="/assets/services/house-icon.png"
        alt=""
        width={150}
        height={150}
      />
      <h1>
        <span className="highlight__orange">LB</span> Roofing
      </h1>

      <span className="trusted-experts">Your Trusted Roofing Experts</span>

      <p>
        With over a decade of experience in the industry, we are your go-to
        roofing professionals. We specialize in top-quality roofing repairs and
        maintenance, delivering enduring results that exceed expectations. We
        pride ourselves on our excellent reputation, built on customer
        satisfaction and word-of-mouth referrals. Count on us for premium
        materials and excellence in every project.
      </p>

      <div className="about-section__contact">
        <p className="modal-info">
          For questions, quotes, or more information about our services
        </p>
        <p className="give-call">Give us a call today</p>
      </div>
    </section>
  );
};

export default About;
