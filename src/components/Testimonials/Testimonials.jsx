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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'John Doe',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'Awesome Service',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
    },
    {
      title: 'Good Support',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Jane Smith',
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusamus, cupiditate earum iure eos architecto repellat aut tempore culpa non.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, accusamus! Explicabo eius voluptatem repellat enim.
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
