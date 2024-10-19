import { computer, aboutfolder, aboutopen, workfolder, workopen } from '../assets';
import React, { useState } from 'react';
import { SidebarData, SidebarData2 } from './SidebarData.jsx';
import Popup from './Popup';

/**
 * HERO
 */
const Hero = () => {
  return (
    <section>
      <div className = "wall"></div>
      <div className = "window"></div>
      <div className = "desk">
        <div className = "scratches"></div>
      </div>
      <div className = "cup">
      </div>
      <img 
      src = {computer} 
      className = "computer"
      alt = "Alexandra de'Ath"/>
        <div className = "cscreen"></div>
    </section>
  )
}

export default Hero;