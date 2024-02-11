import React from "react";
import "./Newsletter.scss"
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>
        Subscribe to our <span>Newsletter</span>
      </h1>

      <form action="">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
      {/* <hr /> */}
    </div>
  );
};

export default Newsletter;
