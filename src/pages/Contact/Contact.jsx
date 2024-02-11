/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useRef } from "react";
import "./Contact.scss";
const images = [
  "/brands/brand1.svg",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand1.svg",
  "/brands/brand2.png",
];
const ContactForm = () => {
  const formRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    if (error === "Email sent successfully") {
      setTimeout(() => {
        // setError("");
        console.log("error set to false");
      }, 3000);
    }
  }, [error]);
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_696xlic",
    //     "template_7r40x8u",
    //     formRef.current,
    //     "on_OBZJCQ7H8z8_K7"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setError("Email sent successfully");
    //       e.target.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       setError("Error sending email");
    //     }
    //   );


  };

  return (
    <div className="contact__form">
      <div className="text__container">
        <h3>BOOK A CALL WITH US</h3>
        <h1>Frictionless, delightfull design starts here</h1>
        <h3>Book a demo and discovery call to get a look at:</h3>
        <ul>
          <li> How Scaler Studio works</li>
          <li>How you can do design at scale better, faster and cheaper</li>
          <li>
            How we’re different from agencies, freelancers and in-house design
            teams (hint: we’re 20x faster than hiring!)
          </li>
          <li>The most suitable subscription plan for your needs</li>
        </ul>

        <div className="brand__grid">
          {images.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </div>
      </div>
      <div className="form__container">
        <form onSubmit={sendEmail} ref={formRef}>
          <div className="input__field">
            <label htmlFor="first__name">Name</label>
            <input type="text" placeholder="Eg. Buzz Aldrin" required name="name" />
          </div>
          {/* <div className="input__field">
            <label htmlFor="last__name">Last Name</label>
            <input type="text" placeholder="Eg. Aldrin" required name="lname" />
          </div> */}
          <div className="input__field">
            <label htmlFor="email">Company Email</label>
            <input
              type="text"
              placeholder="Eg. buzz@nasa.com"
              required
              name="email"
            />
          </div>
          <div className="input__field">
            <label htmlFor="company">Company Name</label>
            <input type="text" placeholder="Eg. NASA" required name="company" />
          </div>
          <div className="input__field">
            <label htmlFor="size">Company Size</label>
            <select type="text" placeholder="Choose an option" name="size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="input__field">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              placeholder="Eg.1234567890"
              required
              name="phone"
            />
          </div>
          {error === "Email sent successfully" ? (
            <button disabled style={{backgroundColor:"green",color:"white"}}>Email Sent Successfully</button>
          ):(
            <button type="submit">Submit</button>
          )}
        </form>
      </div>
    </div>
  );
};
const Contact = () => {
  const [navBg, setNavBg] = useState(false);
  const changeNavBg = () => {
    console.log(window.scrollY);
    window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    console.log("scrolling");
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div className="">
      <ContactForm />
    </div>
  );
};

export default Contact;
