import React, { useState, useEffect } from 'react';
import { styles } from "../styles";

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className = {''}>
          HELLO WORLD!
          <button></button>
        </div>
        <div>
          I do CS stuff...
        </div>
      </div>
    </section>
  );
};

export default Hero;
