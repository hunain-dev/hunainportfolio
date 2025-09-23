import gsap from "gsap";
import { useEffect, useRef } from "react";

const Loader = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const greetings = [
      "HELLO.",
      "HOLA.",
      "नमस्ते.",
      "سلام.",
      "BONJOUR.",
      "مرحبا."
    ];

    const el = textRef.current;


    const tl = gsap.timeline(); // loop forever

    greetings.forEach((greet,) => {
      tl.to(el, {
        opacity: 0,
        duration: 0.01,
        onComplete: () => {
          el.textContent = greet;
        }
      })
      .to(el, {
        opacity: 1,
        duration: 0.01
      })
      .to({}, { duration: 1 }); // pause before next
    });

    // Add a final fade-out for the text
    tl.to(el, {
      opacity: 0,
      duration: 0.2, // Duration for the final text fade-out
    });

    // After some time, move loader up and hide (like your old code)
    gsap.to(".Loader", {
      y: 2000,
      duration: 2,// Added back duration for smooth exit
      delay: 6.80, // Calculated delay to disappear after text fade-out
    });
  }, []);

  return (
    <div className="Loader">
      <h1 ref={textRef}>.</h1>
    </div>
  );
};

export default Loader;
