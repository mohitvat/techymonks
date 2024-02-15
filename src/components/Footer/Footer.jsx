import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo__section">
        <img
          src="/logo.png"
          alt=""
        />
        <div className="footer__address">
          <div className="address__wrapper">
            <span className="address">A-703 Salarpuria Sattva Gold Summit, Kothanur, Bangalore - 560077</span>
          </div>
          <div className="email__wrapper">
            <span className="email">info@techymonks.com</span>
          </div>
          <div className="phone__wrapper">
            <span className="phone">+91 9790613656</span>
          </div>
         
        </div>
      </div>
      <div className="info__section">
        <h1>Crafting a result oriented digital presence for innovators</h1>
        <hr />
        {/* <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
        <div className="footer__icon__section">
          <h5>2022 Techymonks</h5>
          <h5>Connect with Techymonks</h5>
          <h5>© 2022 TechyMonks. All rights reserved. </h5>
          {/* <div className="footer__icons">
            <FaTwitter className="footer__icon" />
            <FaLinkedinIn className="footer__icon" />
            <FaInstagram className="footer__icon" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
