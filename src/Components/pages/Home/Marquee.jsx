import { motion } from "framer-motion";
import Marqueepic from "./Marqueepic";
const Marquee = () => {
  return (
    <>
      <div className="Marquee">
        <Marqueepic/>
        <div className="track">
          {['Front-end reactjs developer','Front-end reactjs developer','Front-end reactjs developer'].map(
            (elem, index) => {
              return (
                <motion.div
                  key={index}
                  className="content"
                  initial={{ x: '11%' }} 
                  animate={{ x: '-100%' }} 
                  
                    transition={{
                            ease: 'linear',
                            repeat: Infinity,
                            duration: 70
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
