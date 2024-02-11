import React from 'react'
import Hero from '../../components/Hero/Hero'
import Testimonials from '../../components/Testimonials/Testimonials'
import Portfolio from '../../components/Portfolio/Portfolio'
import Faqs from '../../components/Faqs/Faqs'
import Contactform from '../../components/Contactform/Contactform'
import Processes from '../../components/Processes/Processes'
import Newsletter from '../../components/Newsletter/Newsletter'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <div className="text__section">
            <div className="text__header">
              <h1>Website Development, Web Design Company in Mumbai, India</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vel exercitationem nulla nemo sapiente in, tempora minus eos repudiandae laborum earum delectus sint illum culpa.</p>
            </div>

            <div className="brands__section">
              <h5>Trusted by global brands</h5>
              <div className="image__container">
              <img src="/brands/brand1.svg" alt="brand logo" />
              <img src="/brands/brand2.png" alt="brand logo" />
              <img src="/brands/brand3.png" alt="brand logo" />
              <img src="/brands/brand4.png" alt="brand logo" />
              </div>
            </div>

            <div className="help__section">
              <div className="help__sticker">
                WE ARE TECHYMONKS
              </div>

              <h1>Who Do We Help</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae fugiat ipsam totam quam, tempore animi soluta quaerat quod sint, a aliquid facere perferendis saepe illum architecto quasi est veritatis veniam. Sequi debitis optio animi! Numquam maxime expedita qui dolore libero saepe facere hic consequatur blanditiis perspiciatis? Maxime!</p>


              <div className="help__types">
                <div className="help__type">
                  <img src="/logos/1.png" alt="brand logo" />
                  <h3>Startups</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique in consectetur quis natus accusamus quam, eligendi maxime. Quam, deserunt.</p>
                </div>
                <div className="help__type">
                  <img src="/logos/2.png" alt="brand logo" />
                  <h3>SMEs</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique in consectetur quis natus accusamus quam, eligendi maxime. Quam, deserunt.</p>
                </div>
                <div className="help__type">
                  <img src="/logos/3.png" alt="brand logo" />
                  <h3>Corporates</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa similique in consectetur quis natus accusamus quam, eligendi maxime. Quam, deserunt.</p>
                </div>
              </div>
            </div>
        </div>
        <Portfolio/>
        <Processes/>
        <Testimonials/>
        <Newsletter/>
        <Contactform/>
        <Faqs/>
    </div>
  )
}

export default Home