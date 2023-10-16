import Image from "next/image";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-section__text-content">
        <Image
          src="/assets/services/house-icon.png"
          alt="Miscellaneous roof icon"
          width={150}
          height={150}
        />
        <h1>
          <span className="highlight__orange">LB</span> Roofing
        </h1>

        <span className="trusted-experts">Your Trusted Roofing Experts</span>

        <p>
          With over a decade of experience in the industry, we are your go-to
          roofing professionals. We specialize in top-quality roofing repairs
          and maintenance, delivering enduring results that exceed expectations.
          We pride ourselves on our excellent reputation, built on customer
          satisfaction and word-of-mouth referrals. Count on us for premium
          materials and excellence in every project.
        </p>
      </div>

      <div className="about-section__contact">
        <span className="here-to-help">Here To Help</span>
        <p>
          At LB Roofing, we are committed to employing the most advanced roofing
          techniques and top-quality materials, ensuring that your roof will
          stand strong against the diverse and unpredictable weather of the UK
          for generations to come. Whether your roof requires expert repairs or
          a full replacement, our dedicated team is here to assist you. Simply
          give us a call and we'll provide a tailored solution to meet your
          specific needs!
        </p>

        <p className="give-call">Give us a call today</p>

        <span className="contact-number">07946 509599</span>
      </div>
    </section>
  );
};

export default About;
