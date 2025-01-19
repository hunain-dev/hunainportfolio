import  { useState } from "react";

const faqsData = [
  {
    question: "Who am I?",
    answer: "I'm Muhammad Hunain, a front-end developer specializing in animated websites using ReactJS, GSAP, Locomotive Scroll, and Framer Motion. I create highly interactive and visually stunning web experiences.",
  },
  {
    question: "What makes my websites different?",
    answer: " My expertise in animations, smooth scrolling, and performance optimization ensures that my websites stand out with high engagement and a premium feel.",
  },
  {
    question: " What technologies do I use?",
    answer: "I work with HTML, CSS, JavaScript, ReactJS, GSAP, Locomotive Scroll, Framer Motion, and Three.js to create modern and immersive web experiences.",
  },
  {
    question: " Do I work on Awwwards-style websites?",
    answer: " Yes! I study and clone Awwwards-winning websites to learn their design techniques and apply them to my projects.",
  },
  {
    question: "Do I only use JavaScript for animations?",
    answer: " No, I utilize GSAP, Locomotive Scroll, Framer Motion, and CSS animations for smooth and optimized motion effects.",
  },
  {
    question: "How can you hire me?",
    answer: "You can reach out via Upwork, LinkedIn, or my portfolio’s contact form. Let’s discuss your project, and I’ll bring your vision to life!",
  },
  {
    question: "How do I ensure smooth collaboration on a project?",
    answer: "I keep the process structured by understanding client goals, providing updates, and maintaining transparent communication to ensure top-notch results.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">{openIndex === index && <p>{faq.answer}</p>}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
