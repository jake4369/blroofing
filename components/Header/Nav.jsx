"use client";

import Link from "next/link";

import CTAButton from "@components/Shared/CTAButton";

import { FiX } from "react-icons/fi";

const Nav = ({ animationClass, handleMenuBtnClick }) => {
  const sections = ["home", "about", "services", "testimonials"];

  const mobileLinks = sections.map((section) => (
    <li key={section} onClick={handleMenuBtnClick}>
      <Link href={`#${section}`}>{section}</Link>
    </li>
  ));

  const handleContactBtnClick = () => {
    handleMenuBtnClick();
    console.log("Contact us");
  };

  return (
    <nav className={animationClass}>
      <button className="menu-btn close-menu-btn" onClick={handleMenuBtnClick}>
        <FiX className="menu-icon" />
      </button>

      <span className="mobile-menu__logo">
        <span className="highlight__orange">LB</span> Roofing
      </span>

      <ul className="desktop-nav">
        <li>Home</li>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>

      <div className="mobile-nav__container">
        <ul className="mobile-nav">
          {mobileLinks}
          <li onClick={handleContactBtnClick}>
            <CTAButton>Contact Us</CTAButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
