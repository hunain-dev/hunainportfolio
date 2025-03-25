import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.Loader h1 span', {
        opacity: 0,
        duration: 2,
        stagger: 0.2, 
      });
      tl.from('.Loader h1 span', {
        opacity: 1,
        duration: 1.2,

        stagger: 0.3, 
        y: 1000, 
    });
    tl.to('.Loader', {
      y: -2000,
      duration: 1, 
      delay: 0.5,  
    });
  }, []);

  return (
    <div className="Loader">
      <h1>
        <span>H</span><span>E</span><span>L</span><span>L</span><span>O.</span>
        <br />
      </h1>
    </div>
  );
};

export default Loader;
