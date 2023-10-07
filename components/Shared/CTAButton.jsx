const CTAButton = ({ children, handleClick }) => {
  return (
    <button className="cta-btn" onClick={handleClick}>
      {children}
    </button>
  );
};

export default CTAButton;
