import { motion } from "framer-motion";
import { styles } from "../styles";
// Add above closing div a hero image
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} mt-40`}>
            Hello I'm <span className='font-serif text-gold font-bold'>Alexandra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Welcome to my portfolio! <br className='sm:block hidden' /> 
          </p>
        </div>
      </div>
      <div>
      <img
      className = {"opacity-5 mt-50 object-right"} 
      src="/herobg.png"/>
      </div>
    </section>
  );
};

export default Hero;