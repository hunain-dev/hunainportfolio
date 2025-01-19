import { motion } from "framer-motion";
import Marqueepic from "./Marqueepic";
const Marquee = () => {
  return (
    <>
      <div className="Marquee">
        <Marqueepic/>
        <div className="track">
          {['Muhammad Hunain  Front-end Developer','Muhammad Hunain  Front-end Developer','Muhammad Hunain  Front-end Developer'].map(
            (elem, index) => {
              return (
                <motion.div
                  key={index}
                  className="content"
                  initial={{ x: '50%' }} 
                  animate={{ x: '-100%' }} 
                  
                    transition={{
                            ease: 'linear',
                            repeat: Infinity,
                            duration: 50
                          }}
                >
                  <h1>{elem}</h1>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Marquee;
