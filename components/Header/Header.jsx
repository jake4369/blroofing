import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <span className="logo-text">
        <span className="highlight__orange">LB</span> Roofing & Brickwork
      </span>

      <button className="open-menu-btn">
        <FiMenu className="hamburger-icon" />
      </button>
    </header>
  );
};

export default Header;
