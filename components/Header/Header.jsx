"use client";

import { useEffect, useState } from "react";

import Nav from "./Nav";

import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleMenuBtnClick = () => {
    setMenuOpen((prevState) => !prevState);

    if (menuOpen) {
      setAnimationClass("slide-out-right");
    } else {
      setAnimationClass("slide-in-right");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setMenuOpen(false);
        setAnimationClass("");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      const timeoutId = setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [menuOpen]);

  return (
    <header>
      <span className="logo-text">
        <span className="highlight__orange">LB</span> Roofing
      </span>

      <button className="menu-btn open-menu-btn" onClick={handleMenuBtnClick}>
        <FiMenu className="menu-icon" />
      </button>

      <Nav
        animationClass={animationClass}
        handleMenuBtnClick={handleMenuBtnClick}
      />
    </header>
  );
};

export default Header;
