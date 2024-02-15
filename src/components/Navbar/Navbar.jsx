// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";
// Navbar component
const Navbar = () => {
  const location = useLocation();
  const url = location.pathname;

  const [activeLink, setActiveLink] = useState(url);

  useEffect(() => {
    console.log(url);
  }, [url]);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 70, // Adjust the offset as needed
        behavior: "smooth",
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
          <NavLink
            to="/"
            exact
            className={
              "navlink" + (activeLink === "/" ? " navlink__active" : "")
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <div
            onClick={scrollToPortfolio}
            className={
              "navlink" +
              (activeLink === "/portfolio" ? " navlink__active" : "")
            }
          >
            Services
          </div>
        </li>
        {/* <li>
          <NavLink to="/blogs" exact className="navlink">
            Blogs
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/about"
            className={
              "navlink" + (activeLink === "/about" ? " navlink__active" : "")
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={
              "navlink" + (activeLink === "/work" ? " navlink__active" : "")
            }
          >
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={
              "navlink" + (activeLink === "/contact" ? " navlink__active" : "")
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
       <NavLink
            to="/contact"
            className={
              "navlink" + (activeLink === "/contact" ? " navlink__active" : "")
            }
          ><button> 
           Get Started</button>
          </NavLink>
    </nav>
  );
};

export default Navbar;
