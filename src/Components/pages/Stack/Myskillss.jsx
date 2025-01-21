import { motion } from "framer-motion";

const Myskillss = () => {
    const skillsimg = [
        { img: "Assets/images/html.png" },
        { img: "Assets/images/css.png" },
        { img: "Assets/images/js.png" },
        { img: "Assets/images/react.png" },
        { img: "Assets/images/framer.png" },
    ];

    return (
        <div className="myskills">
            <h1>My Skills</h1>
            <div className="skills">
                {skillsimg.map((elem, index) => (
                    <motion.div
                        key={index}
                        className="skill-item"
                        drag
                        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} // Smooth Dragging
                        whileHover={{ scale: 1.1 }} // Hover Animation
                        whileTap={{ scale: 0.9 }} // Click Animation
                    >
                        <img src={elem.img} alt={`Skill ${index + 1}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Myskillss;
    