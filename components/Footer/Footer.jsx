"use client";

import { useContext } from "react";

import { ModalContext } from "@context/ModelContext";

import CTAButton from "@components/Shared/CTAButton";

const Footer = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <footer>
      <div className="footer__text-content">
        <span className="footer__logo-text">
          <span className="highlight__orange">LB</span> Roofing
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

        <CTAButton
          handleClick={openModal}
          ariaLabel="Click here to find our contact information"
        >
          Contact Us
        </CTAButton>
      </div>
    </footer>
  );
};

export default Footer;
