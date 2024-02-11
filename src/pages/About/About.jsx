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
          <div className="text__sticker">we are innovative</div>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            reprehenderit doloribus iusto vel perspiciatis et quibusdam ea quas
            autem, itaque consequatur officiis voluptatibus fuga at? Repellat
            obcaecati eligendi consequatur ad quibusdam, velit esse, sit minima
            autem nesciunt beatae est provident. Inventore asperiores eos
            incidunt amet?
          </p>
          <button>Let's start a project</button>
        </div>
      </div>
      <Achievements/>
      <div className="about__section2">
        <div className="text__container">
          <div className="text__sticker">digital experience</div>
          <h1>About our company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            reprehenderit doloribus iusto vel perspiciatis et quibusdam ea quas
            autem, itaque consequatur officiis voluptatibus fuga at? Repellat
            obcaecati eligendi consequatur ad quibusdam, velit esse, sit minima
            autem nesciunt beatae est provident. Inventore asperiores eos
            incidunt amet?
          </p>
          <button>Let's start a project</button>
        </div>
        <div className="image__container">
          <img src="/image-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
