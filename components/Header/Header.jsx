"use client";

import { useEffect, useState } from "react";

import Nav from "./Nav";

import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);

    if (menuOpen) {
      setAnimationClass("slide-out-right");
    } else {
      setAnimationClass("slide-in-right");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setAnimationClass("");
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <span className="logo-text">
        <span className="highlight__orange">LB</span> Roofing
      </span>

      <button className="menu-btn">
        {menuOpen ? (
          <FiX className="menu-icon" onClick={toggleMenu} />
        ) : (
          <FiMenu className="menu-icon" onClick={toggleMenu} />
        )}
      </button>

      <Nav toggleMenu={toggleMenu} animationClass={animationClass} />
    </header>
  );
};

export default Header;
