"use client";

import { useEffect, useState } from "react";

import Nav from "./Nav";

import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 600) {
        // Change this value to the scroll position where you want the header to become sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isSticky ? "sticky-header" : "";

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={headerClass}>
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

      <Nav animationClass={animationClass} />
    </header>
  );
};

export default Header;
