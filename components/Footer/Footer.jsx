import CTAButton from "@components/Shared/CTAButton";

const Footer = () => {
  return (
    <footer>
      <span className="footer__logo-text">
        <span className="highlight__orange">LB</span> Roofing & Brickwork
      </span>

      <p>
        If you have any questions or require any further information on the
        services we provide, please do not hestitate to contact us.
      </p>

      <p>
        We will{" "}
        <span className="highlight__orange">beat any written quote</span> you
        recieve so get in touch for a <br />
        <strong className="highlight__orange">FREE QUOTE</strong>.
      </p>

      <CTAButton>Contact Us</CTAButton>
    </footer>
  );
};

export default Footer;
