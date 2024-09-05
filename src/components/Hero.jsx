import { Aboutfolder, Aboutopen } from '../assets';
import React, { useState } from 'react';

/**
 * HERO
 */
const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!showPopup);
    setIsClicked(!isClicked);
  }

  return (
    <section>
      <div>
        <button className = "Aboutbutton" onClick = {handleClick}>
          <img 
          src = {isClicked ? Aboutopen : Aboutfolder} 
          className = {`Aboutfolder ${isClicked ? 'clicked' : ''}`} 
          alt = "Alexandra de'Ath" />
        </button>
        {showPopup ?
        <div className = "AboutPopup">
          <div className = 'AboutInfo'>
            <h1>About</h1>
          </div>
        </div>
        : null}
      </div>
    </section>
  );
};

export default Hero;
