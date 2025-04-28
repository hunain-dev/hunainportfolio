import { motion } from "framer-motion";
import { useRef } from "react";

const Myskillss = () => {
  const constraintsRef = useRef(null);

  const skillsimg = [
    { img: "Assets/images/html.png" },
    { img: "Assets/images/css.png" },
    { img: "Assets/images/js.png" },
    { img: "Assets/images/react.png" },
    { img: "Assets/images/framer.png" },
    { img: "Assets/images/gsap.png" },
  ];

  return (
    <div className="myskills">
      <h1>My Skills</h1>

      {/* Yeh div ref lega, aur iske andar ka motion dragConstraints lega */}
      <motion.div className="skills" ref={constraintsRef}>
        {skillsimg.map((elem, index) => (
          <motion.div
            key={index}
            className="skill-item"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={elem.img} alt={`Skill ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Myskillss;
