import React from "react";
import "./Processes.scss";
const Processes = () => {
  const processes = [
    {
      id: "01",
      title: "Client Introduction",
      desc: "Research is pivotal in our web development agency's services to establish a solid foundation for every project. We dedicate time to understanding our clients, their objectives, values, target audience, and competition, ensuring a tailored and effective web solution.",
    },
    {
      id: "02",
      title: "Project Strategy",
      desc: "Upon gathering all the necessary information, we formulate our strategies. We segment the project into manageable tasks and assign them to our team members, equipping them with the right tools for efficient and effective web development.",
    },
    {
      id: "03",
      title: "User Ergonomics",
      desc: "We research on what makes the customers associate with a brand, so we can build an experience for them where they feel that every interaction with you was purposeful.",
    },
    {
      id: "04",
      title: "Application Development",
      desc: "Our full service marketing agency developers have the incredible efficacy to bring concepts to life in a way that allows for a memorable user experience.",
    },
    {
      id: "05",
      title: "Quality Assurance",
      desc: "We test the product ourselves before we release it. We go through every little element to make sure the user journey is pleasant from the beginning.",
    },
    {
      id: "06",
      title: "Project Launch",
      desc: "During the launch phase we assist our clients in its maintenance all the way to marketing, to ensure they feel their goal was accomplished.",
    },
  ];
  return (
    <div className="processes">
      <div className="processes__header">
        <h1>Our Processes</h1>
        <p>
          Through research, our web development agency has developed a work
          strategy that ensures a comprehensive approach while allowing for
          precise measurement of the results it yields. We prioritize
          maintaining the flexibility to be creative and make necessary
          adjustments along the way.
        </p>
      </div>

      <div className="processes__container">
        {processes.map((process) => (
          <div className="processes__item" key={process.id}>
            <h1>{process.id}</h1>
            <div className="item__content">
              <h3>{process.title}</h3>
              <p>{process.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Processes;
