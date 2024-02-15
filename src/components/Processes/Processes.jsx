import React from 'react'
import './Processes.scss'
const Processes = () => {

    const processes = [
        {
            id: "01",
            title:"Client Introduction",
            desc: "Research is a key in our marketing agency near you services to build a solid project foundation. Therefore, we take the time to get to know our clients, their goals, values, target customers, and competitors.            "
        },
        {
            id: "02",
            title:"Project Strategy",
            desc: "Once we have all the information we need, we draw up our plans. We divide the project and then allocate those tasks to the team with the appropriate tools."
        },
        {
            id: "03",
            title:"User Ergonomics",
            desc: "We research on what makes the customers associate with a brand, so we can build an experience for them where they feel that every interaction with you was purposeful."
        },
        {
            id: "04",
            title:"Application Development",
            desc: "Our full service marketing agency developers have the incredible efficacy to bring concepts to life in a way that allows for a memorable user experience."
        },
        {
            id: "05",
            title:"Quality Assurance",
            desc: "We test the product ourselves before we release it. We go through every little element to make sure the user journey is pleasant from the beginning."
        },
        {
            id: "06",
            title:"Project Launch",
            desc: "During the launch phase we assist our clients in its maintenance all the way to marketing, to ensure they feel their goal was accomplished."
        },
    ]
  return (
    <div className="processes">
        <div className="processes__header">
            <h1>Our Processes</h1>
            <p>Through research, we, the marketing agency near you, have devised a work strategy that allows us to be comprehensive in our approach, and also measure the results it yields. We ensure that allow ourselves the space to be creative, and also make adjustments where needed.
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
  )
}

export default Processes