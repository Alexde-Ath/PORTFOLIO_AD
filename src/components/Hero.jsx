import { aboutfolder, aboutopen, workfolder, workopen } from '../assets';
import React, { useState } from 'react';
import { SidebarData, SidebarData2 } from './SidebarData.jsx';
import Popup from './Popup';

/**
 * HERO
 */
const Hero = () => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [showPopup1, setPopup1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [showPopup2, setPopup2] = useState(false);

  const handleClick1 = () => {
    setPopup1(!showPopup1);
    setIsClicked1(!isClicked1);
  }

  const handleClick2 = () => {
    setPopup2(!showPopup2);
    setIsClicked2(!isClicked2);
  }

  return (
    <section>
      {/* About Section: Folder buttons, popup with About info */}
      <div>
        <div>
          <button className="aboutbutton" onClick={handleClick1}>
            <img 
              src={isClicked1 ? aboutopen : aboutfolder} 
              className={`aboutfolder ${isClicked1 ? 'clicked' : ''}`} 
              alt="Alexandra de'Ath" 
            />
          </button>
          {/*Popup for About folder*/}
          <Popup
            showPopup={showPopup1}
            content={SidebarData.content}
            onClose={() => {
              setPopup1(false);
              setIsClicked1(false);
            }}
            SidebarData={SidebarData}
          >
            <div >Hello :)</div>
          </Popup>
          </div>
        <button className="workbutton" onClick={handleClick2}>
          <img 
            src={isClicked2 ? workopen : workfolder} 
            className={`workfolder ${isClicked2 ? 'clicked' : ''}`} 
            alt="Alexandra de'Ath" 
          />
        </button>
        <Popup
          showPopup={showPopup2}
          content={SidebarData2.content}
          onClose={() => {
            setPopup2(false);
            setIsClicked2(false);
          }}
          SidebarData={SidebarData2}
        />
      </div>
    </section>
  );
};

export default Hero;