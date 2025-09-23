import { motion } from 'framer-motion';
import { useRef } from 'react';

const Myskillss = () => {

  const skillsimg = [
    { img: "/Assets/images/html.png" },
    { img: "/Assets/images/css.png" },
    { img: "/Assets/images/js.png" },
    { img: "/Assets/images/react.png" },
    { img: "/Assets/images/framer.png" },
    { img: "/Assets/images/gsap.png" },
    { img: "/Assets/images/nextjs.jpeg" },
  ];

  const constraintsRef = useRef(null);

  return (
    <div className="myskills">
      <h1>My Skills</h1>

      <motion.div className="skills" ref={constraintsRef}>
        {skillsimg.map((elem, index) => (
          <motion.div
            key={index}
            className="skill-item"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          >
            <img src={elem.img} alt={`Skill ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Myskillss;
