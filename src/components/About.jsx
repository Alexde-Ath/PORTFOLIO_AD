import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { dwalk} from "../assets";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Hello.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='font-serif mt-4 text-tertiary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a junior studying computer science at the University of Rochester, looking forward to translate my academic knowledge into real-world applications. I have completed courses like Data Structures & Algorithms, Computation & Formal Systems, and Artificial Intelligence.
        <span 
        variants={fadeIn("", "", 0.1, 1)}
        className='font-serif mt-4 text-tertiary text-[17px] max-w-3xl leading-[30px] flex'> I have varying levels of proficiency in C, Java, Python, R, MATLAB, and SQL, and successfully applied these languages in various projects and assignments. My experiences extend beyond the classroom, where I have explored HTML, CSS, and Reactjs as shown by this website. 
        </span>
        <span 
        variants={fadeIn("", "", 0.1, 1)}
        className='font-serif mt-4 text-tertiary text-[17px] max-w-3xl leading-[30px] flex'> 
        Outside of academics, I enjoy playing the flute, playing soccer, and have a passion for trying new foods. I would love to work in person, but open to hybrid or remote, as well as open to travel. Please feel free to contact by pressing contact at the top right or scrolling to the bottom of this web page!</span>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");