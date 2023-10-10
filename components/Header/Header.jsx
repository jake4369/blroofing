"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

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

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        // Disable scrolling on body and html elements when the menu is open
        const body = document.body;
        const html = document.documentElement;
        body.style.overflow = "hidden";
        html.style.overflow = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Re-enable scrolling on body and html elements when the menu is closed
      const body = document.body;
      const html = document.documentElement;
      body.style.overflow = "auto";
      html.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="header-container">
      <header className={isSticky ? "sticky" : ""}>
        <Link href="/">
          <span className="logo-text">
            <Image
              src="/assets/services/house-icon.png"
              alt="Miscellaneous roof icon"
              width={50}
              height={50}
            />
            <span className="highlight__orange">LB</span> Roofing
          </span>
        </Link>

        <button className="menu-btn">
          {menuOpen ? (
            <FiX className="menu-icon" onClick={toggleMenu} />
          ) : (
            <FiMenu className="menu-icon" onClick={toggleMenu} />
          )}
        </button>

        <Nav toggleMenu={toggleMenu} animationClass={animationClass} />
      </header>
      {isSticky && <div className="header-placeholder" />}
    </div>
  );
};

export default Header;
