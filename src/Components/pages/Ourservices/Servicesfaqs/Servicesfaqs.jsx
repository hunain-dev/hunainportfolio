import  { useState } from 'react';

const faqsData = [
  {
    question: "Frequently Asked Questions (FAQ's)"
  },
  {
    question: "Who am I?",
    answer: "Hi, I'm Muhammad Hunain — a Front-End Developer specializing in React.js and expert in crafting animated, interactive websites using GSAP, Locomotive ScrollTrigger, and Framer Motion.",
  },
  {
    question: "What makes my websites different?",
    answer: "My expertise in animations, smooth scrolling, and performance optimization ensures that my websites stand out...",
  },
  {
    question: "Our services & what i offer",
    answer: "I craft responsive and interactive websites tailored for all devices, blending smooth scrolling experiences with engaging animations using GSAP and Framer Motion. With ReactJS at the core, I build dynamic web applications that feel modern, fluid, and visually stunning",
    
  },

  {
    question: "Why choose me?",
    answer: "I specialize in front-end development, crafting high-performance, visually rich websites that offer seamless user experiences. With a passion for creative animations, I bring brands to life through engaging motion that leaves a lasting impact. Every detail matters—from layout precision to interactive elements, I ensure pixel-perfect execution. My client-centric approach means I work closely with you at every step, transforming your vision into an interactive, memorable digital experience.",
    
  },
  {
    question: "What technologies do I use?",
    answer: "I work with HTML, CSS, JavaScript, ReactJS, GSAP, Locomotive Scroll, Framer Motion, and Three.js to create modern and immersive web experiences.",
  },

  {
    question: "Do I work on Awwwards-style websites?",
    answer: "Yes! I study and clone Awwwards-winning websites to learn their design techniques and apply them to my projects.",
  },
  {
    question: "Do I only use JavaScript for animations?",
    answer: "No, I utilize GSAP, Locomotive Scroll, Framer Motion, and CSS animations for smooth and optimized motion effects.",
  },
  {
    question: "How can you hire me?",
    answer: "You can reach out via Upwork, LinkedIn, Github  or my portfolio’s contact form. Let’s discuss your project!",
  },
  {
    question: "How do I ensure smooth collaboration on a project?",
    answer: "I keep the process structured by understanding client goals, providing updates, and maintaining transparent communication.",
  },
];

const Servicesfaqs = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMainFAQ = () => {
    setShowQuestions(!showQuestions);
    setOpenIndex(null); 
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <div className="faq-list">
        {/* Main FAQ heading */}
        <div className="faq-item open">
          <div className="faq-question" onClick={toggleMainFAQ}>
            {faqsData[0].question}
            <span className="faq-icon">{showQuestions ? '−' : '+'}</span>
          </div>
        </div>

        {showQuestions &&
          faqsData.slice(1).map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Servicesfaqs;
