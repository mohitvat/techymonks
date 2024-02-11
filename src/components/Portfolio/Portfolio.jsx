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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat amet sit laborum, commodi consequuntur accusamus maxime maiores inventore, aliquid ex et esse non ad cumque, deserunt perferendis quam quisquam?1",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur tempore temporibus quod nobis voluptatibus eligendi architecto, id labore officiis! Natus!2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat amet sit laborum, commodi consequuntur accusamus maxime maiores inventore, aliquid ex et esse non ad cumque, deserunt perferendis quam quisquam?3",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur tempore temporibus quod nobis voluptatibus eligendi architecto, id labore officiis! Natus!4",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat amet sit laborum, commodi consequuntur accusamus maxime maiores inventore, aliquid ex et esse non ad cumque, deserunt perferendis quam quisquam?5",
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
      <div className="portfolio__header">
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
                {/* <div className="portfolio__item__content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div> */}
              </div>
            )
        )}
      </div>

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
