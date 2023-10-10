const CTAButton = ({ children, handleClick, ariaLabel }) => {
  return (
    <button className="cta-btn" onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default CTAButton;
