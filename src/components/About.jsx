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
        I am a junior studying computer science at University of Rochester and I enjoy playing the flute, soccer, and eating. I am looking to apply experiences from my CS classes in the real world, some classes I took are Data Structures & Algorithmes, Computation & Formal Systems, and Artifical Intelligence. Langauges used in these classes have been C, Java, Python and I also seperately learnt how to use R, MATLAB, and SQL. From creating this website I have also taken to learn about frontend coding, which I am interested in pursuing, while learning how to use HTML, CSS, and REACT. 
        <span 
        variants={fadeIn("", "", 0.1, 1)}
        className='font-serif mt-4 text-tertiary text-[17px] max-w-3xl leading-[30px] flex'> I would love to work in person and willing to travel. Please feel free to contact me for job oppurtunities or just a chat about tasty food! </span>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");