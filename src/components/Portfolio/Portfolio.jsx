import React, { useState } from "react";
import "./Portfolio.scss";
const Portfolio = () => {
  const portfolio_items = [
    {
      id: 1,
      image: "https://via.placeholder.com/500x500",
      title: "Portfolio Item 1",
      tag: "tag1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae numquam quas quos totam placeat!",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/500x500",
      title: "Portfolio Item 2",
      tag: "tag2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae numquam quas quos totam placeat!",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/500x500",
      title: "Portfolio Item 3",
      tag: "tag3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae numquam quas quos totam placeat!",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/500x500",
      title: "Portfolio Item 4",
      tag: "tag1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae numquam quas quos totam placeat!",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/500x500",
      title: "Portfolio Item 5",
      tag: "tag2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae numquam quas quos totam placeat!",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/500x500",
      title: "Portfolio Item 6",
      tag: "tag3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae numquam quas quos totam placeat!",
    },
  ];

  const text__filters_data = [
    "Crafting cutting-edge mobile apps that defy the ordinary. From sleek interfaces to seamless functionality, we bring your ideas to life on every device. Elevate your digital presence with our innovative mobile development solutions.",
    "Welcome to the visual frontier. Our front-end wizards create stunning, user-centric interfaces that captivate and engage. Immerse your audience in a seamless digital experience with our expertly crafted front-end solutions.",
    "In the realm of data, we reign supreme. Harness the power of organized information with our robust database solutions. From architecture to optimization, we transform your data into a strategic asset that propels your business forward",
    "Empower your content, effortlessly. Our Content Management Systems (CMS) redefine simplicity and control. Navigate the digital landscape with ease as we tailor dynamic CMS solutions that make content creation and management a breeze.",
    "Embrace the future of streamlined development and operations. Our Dev-Ops expertise ensures your software delivery process is seamless, automated, and resilient. Experience efficiency, collaboration, and rapid deployment with our cutting-edge Dev-Ops solutions.",
  ];

  const [currentText, setCurrentText] = useState(text__filters_data[0]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const handleTextFilters = (index) => {
    setCurrentText(text__filters_data[index]);
  };

  const handleFilter = (filter) => {
    setCurrentFilter(filter);
  };
  return (
    <div className="portfolio" id="portfolio">
      {/* <div className="portfolio__header">
        <div className="selected__projects">
          <h4>SELECTED PROJECTS</h4>
        </div>
        <div className="portfolio__title">
          <h1>Some of the projects we're proud of</h1>
        </div>
      </div>
      <div className="filter__bar">
        <div className="filter__items">
          <div className="filter__title">Filter by</div>
          <div
            className={"filter__item" + (currentFilter == "all" ? " filter__active" : "")}
            onClick={() => handleFilter("all")}
          >
            All
          </div>
          <div  className={"filter__item" + (currentFilter == "tag1" ? " filter__active" : "")} onClick={() => handleFilter("tag1")}>
            Tag 1
          </div>
          <div  className={"filter__item" + (currentFilter == "tag2" ? " filter__active" : "")} onClick={() => handleFilter("tag2")}>
            Tag 2
          </div>
          <div  className={"filter__item" + (currentFilter == "tag3" ? " filter__active" : "")} onClick={() => handleFilter("tag3")}>
            Tag 3
          </div>
        </div>
        <a>See more</a>
      </div>
      <div className="portfolio__items">
        {portfolio_items.map(
          (item) =>
            (item.tag == currentFilter || currentFilter == "all") && (
              <div className="portfolio__item" key={item.id}>
                <div className="portfolio__item__image">
                  <img src={item.image} alt={item.title} />
                </div>
                
              </div>
            )
        )}
      </div> */}

      <div className="text__filters">
        <h1>Technologies will bring maximum value to your business</h1>
        <div className="text__filter__list">
          <div
            className={"text__filter__item" + (currentText === text__filters_data[0] ? " text__filter__active" : "")}
            onClick={() => handleTextFilters(0)}
          >
            Mobile
          </div>
          <div
            className={"text__filter__item" + (currentText === text__filters_data[1] ? " text__filter__active" : "")}
            onClick={() => handleTextFilters(1)}
          >
            Front End
          </div>
          <div
            className={"text__filter__item" + (currentText === text__filters_data[2] ? " text__filter__active" : "")}
            onClick={() => handleTextFilters(2)}
          >
            Database
          </div>
          <div
            className={"text__filter__item" + (currentText === text__filters_data[3] ? " text__filter__active" : "")}
            onClick={() => handleTextFilters(3)}
          >
            CMS
          </div>
          <div
            className={"text__filter__item" + (currentText === text__filters_data[4] ? " text__filter__active" : "")}
            onClick={() => handleTextFilters(4)}
          >
            Dev Ops
          </div>
        </div>
        <hr />
        <p>{currentText}</p>
      </div>
    </div>
  );
};

export default Portfolio;
