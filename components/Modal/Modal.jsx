"use client";

import { useContext, useEffect } from "react";

import { ModalContext } from "@context/ModelContext";

import Image from "next/image";

import CTAButton from "@components/Shared/CTAButton";

import { FiPhone, FiX } from "react-icons/fi";

const Modal = () => {
  const { closeModal } = useContext(ModalContext);

  const phoneNumber = "07352 364373";

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    // When the modal opens, disable scrolling on both body and html elements
    const body = document.body;
    const html = document.documentElement;

    const scrollY = window.scrollY;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    // Restore the original scroll position when the modal is closed
    return () => {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="close-modal-btn" onClick={closeModal}>
          <FiX className="close-modal-icon" />
        </button>
        <Image
          src="/assets/services/house-icon.png"
          alt="Miscellaneous roof icon"
          width={100}
          height={100}
          priority
        />
        <p className="modal-heading">
          <span className="highlight__orange">LB</span> Roofing
        </p>
        <p className="modal-info">
          For questions, quotes, or more information about our services
        </p>
        <p className="give-call">Give us a call today</p>

        <CTAButton
          handleClick={handleCallButtonClick}
          ariaLabel="Click here to open dialler with LB Roofing contact number"
        >
          <FiPhone className="phone-icon" /> 07946 509599
        </CTAButton>

        <span className="contact-number">07946 509599</span>
      </div>
    </div>
  );
};

export default Modal;
