import React from "react";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";
import Portfolio from "../../components/Portfolio/Portfolio";
import Faqs from "../../components/Faqs/Faqs";
import Contactform from "../../components/Contactform/Contactform";
import Processes from "../../components/Processes/Processes";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <div className="text__section">
        <div className="text__header">
          <h1>Website Development, Web Design Company in Mumbai, India</h1>
          <p>
            Techymonks is a professional web development and website design
            company in Mumbai, India with over 10+ years of experience in the
            digital industry. Apart from our role as a web development agency,
            we also offer 360 degree digital services to help you grow your
            business online. We are proud to have some of the best website
            developers and web designers in Mumbai, India.
          </p>
        </div>

        <div className="brands__section">
          <h5>Trusted by global brands</h5>
          <div className="image__container">
            <img src="/brands/brand1.png" alt="brand logo" />
            <img src="/brands/brand2.png" alt="brand logo" />
            <img src="/brands/brand3.png" alt="brand logo" />
            <img src="/brands/brand4.png" alt="brand logo" />
            <img src="/brands/brand5.png" alt="brand logo" />
          </div>
        </div>

        <div className="help__section">
          <div className="help__sticker">WE ARE TECHYMONKS</div>

          <h1>Who Do We Help</h1>
          <p className="help__text">
            With a team of design, development and strategy experts, Techymonks
            partners with brands of all sizes to provide a variety of
            tailor-made digital solutions.
          </p>

          <div className="help__types">
            <div className="help__type">
              <img src="/logos/1.png" alt="brand logo" />
              <h3>Startups</h3>
              <p>
                Services for startups and individuals who do not have an online
                presence and are looking to translate their vision to reality
              </p>
            </div>
            <div className="help__type">
              <img src="/logos/2.png" alt="brand logo" />
              <h3>SMEs</h3>
              <p>
                Promotional strategies for small and medium sized enterprises
                who are looking to tap new demographics, customers and sales
              </p>
            </div>
            <div className="help__type">
              <img src="/logos/3.png" alt="brand logo" />
              <h3>Corporates</h3>
              <p>
                Services for already established enterprises who are looking to
                optimize and scale their business to become market leaders in
                their industry
              </p>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      <Processes />
      <Testimonials />
      <Newsletter />
      <Contactform />
      <Faqs />
    </div>
  );
};

export default Home;
