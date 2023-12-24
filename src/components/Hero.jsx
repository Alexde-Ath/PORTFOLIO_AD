import React, { useState, useEffect } from 'react';
import { styles } from "../styles";

const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ['Hello', '你好', 'Hallo', 'Ciao', 'Bonjour', 'こんにちは', 'Dia dhuit', 'Hola', 'Hallå','Benvinutu'];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} mt-40`}>
            <span className='font-serif text-gold font-bold'>{greetings[greetingIndex]} </span>I'm Alexandra
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Welcome to my portfolio! <br className='sm:block hidden' /> 
          </p>
        </div>
      </div>
      <div>
        <img
          className={"opacity-5 mt-50 object-right"} 
          src="/herobg.png"
          alt="Hero Background"
        />
      </div>
    </section>
  );
};

export default Hero;
