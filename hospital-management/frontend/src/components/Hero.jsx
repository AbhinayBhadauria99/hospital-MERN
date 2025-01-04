import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At ZeeCare Medical Institute, we redefine healthcare by blending advanced technology with a compassionate touch. Our multidisciplinary team of experts is dedicated to providing personalized medical solutions designed to meet the unique needs of every patient. With a focus on innovation, trust, and patient-centered care, ZeeCare is your partner in achieving a healthier, happier life. Your well-being is our commitment, and together, we’ll navigate your path to optimal health.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
