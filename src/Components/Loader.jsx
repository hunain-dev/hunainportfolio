import { useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".line1", { opacity: 0, y: 50, duration: 1, ease: "power2.out" })
      .from(".line2", { opacity: 0, y: 50, duration: 1, delay: 0.3, ease: "power2.out" })
      .to(".Loader", { opacity: 0, duration: 0.5, delay: 0.5, onComplete: () => {
          document.querySelector(".Loader").style.display = "none";
      }});
  }, []);

  return (
    <div className="Loader">
      <h1 className="line1">Frontend</h1>
      <h1 className="line2">Developer & Designer</h1>
    </div>
  );
};

export default Loader;
