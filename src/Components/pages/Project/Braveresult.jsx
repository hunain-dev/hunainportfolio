import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Braveresult = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=180%",  // adjust according to how long you want scroll
          scrub: 9,   // smooth slow scroll effect
          pin: true,     // pin the section while animation runs
        },
      });

      // Background or container color change (if needed)
      tl.to(containerRef.current, {
        backgroundColor: "black",
        ease: "none",
      });

      // Reveal Expect
      tl.fromTo(
        ".expect",
        { y: 120, opacity: 0 },
        { y: 10, opacity: 1, duration: 6, ease: "power3.out" },
        0
      );

      // Reveal BRAVE (a bit later)
      tl.fromTo(
        ".bravo",
        { y: 100, opacity: 0 },
        { y: -150, opacity: 1, duration: 6, ease: "power3.out" },
        0.5
      );


      // Reveal RESULT (last)
      tl.fromTo(
        ".result",
        { y: 100, opacity: 0 },
        { y: 180, opacity: 1, duration: 6, ease: "power3.out" },
        1
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="Braveresult relative h-screen overflow-hidden flex flex-col  items-center justify-center "
    >
      <h2 className="expect absolute">EXPECT</h2>
      <h2 className="bravo absolute">BRAVE</h2>
      <h2 className="result absolute">RESULT</h2>
    </div>
  );
};

export default Braveresult;
