import React, { useState } from 'react'
import './Faqs.scss'
const Faqs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const questions = [
    {
      question: "What type of websites can you help me with?",
      answer: "We can help you with all kinds of websites like static or dynamic, ecommerce, custom websites based on your requirement and landing pages.",
    },
    {
      question: "How much does it cost to develop a website?",
      answer: "Website development charges are completely based on your requirement. Please get in touch with us to know more about the website development charges.",
    },
    {
      question: "Do you provide free support after development?",
      answer: "Yes, we provide FREE support for 3 months once the website is live. The support includes monitoring and rectifying website downtime, any issues or bugs identified in the existing website. You can opt for our Annual Maintenance packages once the free support period is over.",
    },
    {
      question: "Will the website be mobile friendly?",
      answer: "Yes, all our websites are responsive web design. They are mobile friendly and adapts to screen sizes of the latest mobile devices.",
    },
    {
      question: "How much time will it take to develop a website?",
      answer: "Average time for a basic informative website generally takes about 2 weeks of time once signed off.",
    },
    {
      question: "Will the website be SEO friendly?",
      answer: "Yes, our websites are SEO friendly which means it includes tools through which you can perform SEO on the website.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use PHP and its frameworks like codeigniter or Laravel for custom website development and CMS such as wordpress for template-based website development.",
    },
    {
      question: "Do you offer only website development?",
      answer: "No, we provide a full range of services apart from website development that includes search engine optimization, social media marketing, mobile app development, branding and video creation to name a few.",
    },
  ];

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq__container">
      {questions.map((faq, index) => (
        <div key={index} className="faq-item">
          <button onClick={() => toggleQuestion(index)} className={`faq-question ${activeQuestion === index ? "active" : ""}`}>
            {faq.question}
          </button>
          {activeQuestion === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default Faqs;
