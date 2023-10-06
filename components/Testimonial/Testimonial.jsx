import Reviews from "@components/Reviews/Reviews";
import CTAButton from "@components/Shared/CTAButton";

import { secondaryReviews } from "@constants";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <p>
        LB Roofing and Brickwork, a family-run business with over a decade of
        roofing and building expertise, is your go-to choice in the West
        Midlands for top-notch roofing solutions. Our commitment to delivering
        outstanding quality and friendly service at competitive prices sets us
        apart. <br />{" "}
        <strong>Trust us to beat any written quote you receive.</strong>
      </p>

      <CTAButton>Get a Quote</CTAButton>

      <Reviews
        reviewClassname="reviews__secondary"
        reviewData={secondaryReviews}
      />
    </section>
  );
};

export default Testimonial;