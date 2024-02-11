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
      answer: "We can help you with a variety of websites, including...",
    },
    {
      question: "Will the website be SEO friendly?",
      answer: "Yes, our websites are SEO friendly...",
    },
    {
      question: "What type of websites can you help me with?",
      answer: "We can help you with a variety of websites, including...",
    },
    {
      question: "Will the website be SEO friendly?",
      answer: "Yes, our websites are SEO friendly...",
    },
    {
      question: "What type of websites can you help me with?",
      answer: "We can help you with a variety of websites, including...",
    },
    {
      question: "Will the website be SEO friendly?",
      answer: "Yes, our websites are SEO friendly...",
    },
    {
      question: "What type of websites can you help me with?",
      answer: "We can help you with a variety of websites, including...",
    },
    {
      question: "Will the website be SEO friendly?",
      answer: "Yes, our websites are SEO friendly...",
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
