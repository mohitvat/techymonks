import React from "react";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <h1>
          Innovative Digital and Technology Solutions for Futuristic Brands
        </h1>
        <div className="hero__text">
          <div className="text">
            <img src="/logos/1.png" alt="" />
            <p>
            Full suite of digital marketing services to grow your business 
            </p>
          </div>
          <div className="text">
            <img src="/logos/2.png" alt="" />
            <p>
            Over 10 years of experience. Trusted by 500+ brands globally. 
            </p>
          </div>
          <div className="text">
            <img src="/logos/3.png" alt="" />
            <p>
            Affordable, process and quality oriented for businesses small and big 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
