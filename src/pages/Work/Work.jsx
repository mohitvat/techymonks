import React, { useState } from "react";
import "./Work.scss";
const work_items = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "UI/UX Design",
    tag: "Design",
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Brand Website",
    tag: "Website Development",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Payment App",
    tag: "Mobile App",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "API Development",
    tag: "Other",
  },
];
const Work = () => {
  const [tag, setTag] = useState(null);

  const handleTagClick = (tag) => {
    setTag(tag);
  };
  return (
    <div className="work">
      <div className="header__section">
        <h6>Crafting digital success stories</h6>
        <h1>Delve into our <span>work</span> </h1>
        <h6>- Would you like to work with us?</h6>
      </div>
      <div className="work__grid">
        <div className="filters">
          <ul>
            <li onClick={() => handleTagClick(null)} className={tag==null&&"active"}>All</li>
            <li onClick={() => handleTagClick("Design")} className={tag=="Design"&&"active"}>Design</li>
            <li onClick={() => handleTagClick("Website Development")} className={tag=="Website Development"&&"active"}>
              Website Development
            </li>
            <li onClick={() => handleTagClick("Mobile App")}>Mobile App</li>
            <li onClick={() => handleTagClick("Other")}>Other</li>
          </ul>
        </div>
        <div className="work__items">
            
          {work_items.map((item) => {
            if (tag && item.tag !== tag) {
              return null;
            }
            return (
              <div className="work__item" key={item.id}>
                <img src={item.image} alt="work image" />
                <h3>{item.title}</h3>
                <p>{item.tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
