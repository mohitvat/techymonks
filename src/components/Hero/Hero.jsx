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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className="text">
            <img src="/logos/2.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
          <div className="text">
            <img src="/logos/3.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
