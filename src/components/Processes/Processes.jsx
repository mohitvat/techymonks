import React from 'react'
import './Processes.scss'
const Processes = () => {

    const processes = [
        {
            id: "01",
            title:"Client Introduction",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur, non ducimus voluptas esse in maxime tempora distinctio sunt minima?"
        },
        {
            id: "02",
            title:"Project Strategy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur, non ducimus voluptas esse in maxime tempora distinctio sunt minima?"
        },
        {
            id: "03",
            title:"User Ergonomics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur, non ducimus voluptas esse in maxime tempora distinctio sunt minima?"
        },
        {
            id: "04",
            title:"Application Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur, non ducimus voluptas esse in maxime tempora distinctio sunt minima?"
        },
        {
            id: "05",
            title:"Quality Assurance",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur, non ducimus voluptas esse in maxime tempora distinctio sunt minima?"
        },
        {
            id: "06",
            title:"Project Launch",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur, non ducimus voluptas esse in maxime tempora distinctio sunt minima?"
        },
    ]
  return (
    <div className="processes">
        <div className="processes__header">
            <h1>Our Processes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sit, tempore illum repellat facilis dolore sint assumenda laborum suscipit eveniet quia ducimus aliquid nostrum animi esse praesentium! Id, quis aut.
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