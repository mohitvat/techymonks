// Import necessary dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss";
// Navbar component
const Navbar = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');

    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 70, // Adjust the offset as needed
        behavior: 'smooth',
      });
    }
  };
  return (
    <nav>
        <div className="header__image">
            <img src="/logo.png" alt="logo" />
        </div>
      <ul>
        
        <li>
          <NavLink to="/" exact className="navlink__active navlink">
            Home
          </NavLink>
        </li>
        <li>
          <div onClick={scrollToPortfolio} className="navlink">
            Portfolio
          </div>
        </li>
        <li>
          <NavLink to="/blogs" exact className="navlink">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="navlink">
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </li>
      </ul>
      <button>Get Started</button>
    </nav>
  );
};

export default Navbar;
