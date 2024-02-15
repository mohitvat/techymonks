import React from "react";
import "./About.scss";
import Achievements from "../../components/Achievements/Achievements";
const About = () => {
  return (
    <div className="about">
      <div className="about__section1">
        <div className="image__container">
          <img src="/image-1.jpg" alt="" />
        </div>
        <div className="text__container">
          <div className="text__sticker">We Are Innovative</div>
          <h1>Our Story</h1>
          <p>
          Techymonks is a digital first and technology company in Bangalore, India that focuses on quality, innovation and positive ROI for our clients. Call us a technology driven firm that combines design aesthetics with technology to bring results to grow our client’s businesses.
          </p>
          <a href="/contact"><button> Let's start a project</button>  </a>

        </div>
      </div>
      <Achievements/>
      <div className="about__section2">
        <div className="text__container">
          <div className="text__sticker">digital experience</div>
          <h1>About our company</h1>
          <p>
          Established in the year 2020 with a small number of clients, Techymonks now has over 500+ clients that spans globally. We pride ourselves in great work ethic, integrity, and end-results. Our daily tasks involve plotting ideas that help connect clients with their target audiences. We combine aesthetics with technology to add real value for our clients. Check some of our work done for our clients.
          </p>
          <a href="/contact"><button> Let's start a project</button>  </a>
        </div>
        <div className="image__container">
          <img src="/image-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
