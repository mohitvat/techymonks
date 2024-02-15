// Import necessary dependencies
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Testimonials.scss";
// Testimonials component
const Testimonials = () => {
  // Testimonials data
  const testimonialsData = [
    {
      title: 'Great Experience',
      description: 'Knowing that there are many web design and development companies in Mumbai, India, we were spoilt for choice in deciding whom to outsource our work to. After thorough research and multiple discussions, we decided to go ahead with Techymonks. Not only they exceeded our expectations but they provided us innovative ways to scale our business. Highly recommended!!',
      author: 'Rahul Sharma',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'Awesome Service',
      description: 'Attention to detail, proactive approach, innovative ideas, client satisfaction are some of the key traits that describes Techymonks. We have entrusted Techymonks team to handle SEO, mobile application development and branding for our company and they were excellent in all areas. Pretty satisfied with the work. Will definitely work with them again',
      author: 'Vikas Choudhary',
      image: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'Good Support',
      description: 'Techymonks transformed our online presence with cutting-edge design and flawless functionality. Their team exceeded expectations, delivering excellence with precision.',
      author: 'Karun Sharma',
      image: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    // Add more testimonials as needed
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-container">
      <img src="/quote.png" alt="" />
      <h2>What they're saying</h2>
      <p>Get ready to dive into the juiciest chapter of our customer stories. No filters, just raw and modern tales of satisfaction that'll have you saying, "That's my kind of vibe." Let the real talk unfold as our community shares their journey with a touch of sass and a dash of wow.
      </p>
      <hr />
      <Slider {...sliderSettings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <h3>{testimonial.title}</h3>
            <blockquote>{testimonial.description}</blockquote>
            <div className="author-info">
              {/* <img src={testimonial.image} alt={testimonial.author} /> */}
              <p>{testimonial.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
