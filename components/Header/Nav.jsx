import Link from "next/link";
import Image from "next/image";

const Nav = ({ animationClass, toggleMenu }) => {
  const sections = ["home", "about", "services", "testimonials"];

  const links = sections.map((section) => (
    <li key={section} onClick={toggleMenu}>
      <Link href={`#${section}`}>{section}</Link>
    </li>
  ));

  return (
    <nav className={animationClass}>
      {/* DESKTOP NAV */}
      <ul className="desktop-nav"></ul>

      {/* MOBILE NAV */}
      <div className="mobile-nav__container">
        <Image
          src="/assets/services/house-icon.png"
          alt=""
          width={100}
          height={100}
        />
        <span className="text-logo__mobile-nav">
          <span className="highlight__orange">LB</span> Roofing
        </span>

        <ul className="mobile-nav">{links}</ul>
      </div>
    </nav>
  );
};

export default Nav;
