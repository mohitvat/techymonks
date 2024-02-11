import React, { useState, useEffect } from "react";
import "./Achievements.scss";
const AnimatedCounter = ({ startValue, endValue }) => {
  const [count, setCount] = useState(startValue || 0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, endValue]);

  return <div className="animated__counter">{count}</div>;
};
const achievements = [
  {
    image: "/achievements/1.png",
    startValue: 100,
    endValue: 500,
    title: "Satisfied Clients",
  },
  {
    image: "/achievements/2.png",
    startValue: 500,
    endValue: 800,
    title: "Projects Completed",
  },
  {
    image: "/achievements/3.png",
    startValue: 1.0,
    endValue: 4.9,
    title: "Average Rating",
  },
  {
    image: "/achievements/4.png",
    startValue: 0,
    endValue: 3,
    title: "Delivery Time",
  },
];
const Achievements = () => {
  return (
    <div className="achievements__wrapper">
      {achievements.map((achievement, index) => (
        <div className="achievements__item" key={index}>
          <img src={achievement.image} alt="achievement image" />
          <div className="achivement__text tracking-wide">
            <AnimatedCounter
              startValue={achievement.startValue}
              endValue={achievement.endValue}
            />
            <h2>{achievement.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
