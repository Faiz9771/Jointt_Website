import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'You can create an account by downloading the app and following the registration process.'
    },
    {
      question: 'What happens in "The Meet"',
      answer: '"The Meet" is our random video chat feature where you can meet new people from your university and around the world safely.'
    },
    {
      question: 'Can I customize my profile?',
      answer: 'Yes! You can personalize your profile with themes, layouts, and various customization options.'
    },
    {
      question: 'Is Jointt available on all devices?',
      answer: 'Jointt will be available on iOS and Android devices. The app is coming soon!'
    },
    {
      question: 'What privacy controls are available?',
      answer: 'We offer comprehensive privacy controls to help you manage who can see your profile and content.'
    },
    {
      question: 'How does the smart matching work?',
      answer: 'Our smart matching algorithm connects you with like-minded individuals based on your interests and preferences.'
    },
    {
      question: 'Can I share multimedia content?',
      answer: 'Yes, you can share photos, videos, and other multimedia content with your connections and communities.'
    },
    {
      question: 'What should I do if I encounter issues?',
      answer: 'If you encounter any issues, please contact our support team at jointt.work@gmail.com'
    },
    {
      question: 'When is Jointt launching?',
      answer: 'Jointt will be launching soon! Stay in touch to be notified when the app becomes available.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


