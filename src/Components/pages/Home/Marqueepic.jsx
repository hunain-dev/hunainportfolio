import { useState, useEffect, useRef } from "react";
import "@google/model-viewer";

const Marqueepic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // once visible, stop observing
          }
        });
      },
      { threshold: 0.2 } // when 20% of component visible
    );

    if (modelRef.current) observer.observe(modelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="imageupper">
      <div className="Modelview" ref={modelRef}>
        {isVisible ? (
          <model-viewer
            src="/Assets/Models/cube.glb"
            alt="3D Cube"
            auto-rotate
            camera-controls
            disable-zoom
          ></model-viewer>
        ) : (
          <div className="text-center text-gray-500 py-10">Loading model...</div>
        )}
      </div>
    </div>
  );
};

export default Marqueepic;
