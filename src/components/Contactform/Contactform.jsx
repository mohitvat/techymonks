import React from "react";
import "./Contactform.scss";
const Contactform = () => {
  return (
    <div className="contactform">
      <div className="contact__wrapper">
        <div className="text__section">
          <h1>Have a project in mind?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            soluta impedit cumque atque consectetur nemo? Dolorum est
            exercitationem sint numquam, esse dicta natus sed tempora ducimus.
            Repudiandae officiis hic vero.
          </p>
        </div>
        <div className="form__section">
          <form action="">
            <input type="text" placeholder="What is your name?" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Your phone no." />
            <textarea type="text" placeholder="Leave a message" />
            <button>Send your message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
