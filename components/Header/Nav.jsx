"use client";

import { useContext, useEffect } from "react";

import { ModalContext } from "@context/ModelContext";

import Link from "next/link";
import Image from "next/image";

import CTAButton from "@components/Shared/CTAButton";

const Nav = ({ animationClass, toggleMenu }) => {
  const { openModal } = useContext(ModalContext);

  const sections = ["home", "about", "services", "testimonials"];

  const mobileLinks = sections.map((section) => (
    <li key={section} onClick={toggleMenu}>
      <Link href={`#${section}`}>{section}</Link>
    </li>
  ));

  const desktopLinks = sections.map((section) => (
    <li key={section}>
      <Link href={`#${section}`}>{section}</Link>
    </li>
  ));

  return (
    <nav className={animationClass}>
      {/* DESKTOP NAV */}
      <ul className="desktop-nav">{desktopLinks}</ul>

      {/* MOBILE NAV */}
      <div className="mobile-nav__container">
        <Image
          src="/assets/services/house-icon.png"
          alt="Miscellaneous roof icon"
          width={100}
          height={100}
          priority
        />
        <span className="text-logo__mobile-nav">
          <span className="highlight__orange">LB</span> Roofing
        </span>

        <ul className="mobile-nav">
          {mobileLinks}
          <li onClick={toggleMenu}>
            <div className="nav__cta-btn-container">
              <CTAButton
                handleClick={openModal}
                ariaLabel="Click here to find our contact information"
              >
                Contact Us
              </CTAButton>
              <p>
                Get your <strong>FREE</strong> quote
              </p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
