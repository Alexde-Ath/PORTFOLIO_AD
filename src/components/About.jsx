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
        I am a junior studying computer science at University of Rochester and I enjoy playing the flute, soccer, and taste-testing food. I am looking to apply experiences from my academic classes in the real world, some classes I took: Data Structures & Algorithms, Computation & Formal Systems, and Artifical Intelligence. I have varying profiency in these languages: C, Java, Python, and I also seperately learnt how to use R, MATLAB, and SQL. As displayed by this website I have also have some experience HTML, CSS. Reactjs, which I am interested in pursuing further. 
        <span 
        variants={fadeIn("", "", 0.1, 1)}
        className='font-serif mt-4 text-tertiary text-[17px] max-w-3xl leading-[30px] flex'> I would love to work in person and willing to travel. Please feel free to contact me for job oppurtunities or just a chat about tasty food! </span>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");