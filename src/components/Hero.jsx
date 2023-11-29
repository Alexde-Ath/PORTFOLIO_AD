import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='font-serif text-blue-300'>Alexandra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Welcome to my resume! <br className='sm:block hidden' /> 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;