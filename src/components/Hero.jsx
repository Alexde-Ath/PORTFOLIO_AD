import { Aboutfolder, Aboutopen, mcomp, closeButton } from '../assets';
import React, { useState, useEffect, useRef } from 'react';
import SidebarData from './SidebarData';

/* Drag screen function based from https://www.w3schools.com/HOWTO/howto_js_draggable.asp
* create dependency array to useEffect hook to run when showPopup state changes
*/
function useDrag(showPopup, setIsGrab) {
  const elmntRef = useRef(null);
  const pos = useRef({ top: 100, left: 400, x: 0, y: 0 });

  useEffect(() => {
    const elmnt = elmntRef.current;
    if (!elmnt) return;
    
    const mouseDownHandler = (e) => {
      setIsGrab(true);
      pos.current = {
        left: elmnt.offsetLeft,
        top: elmnt.offsetTop,
        x: e.clientX,
        y: e.clientY,
      };
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = (e) => {
      // Handle how far mouse moved from pos.current
      const distancex = e.clientX - pos.current.x;
      const distancey = e.clientY - pos.current.y;
      // New position
      const newLeft = pos.current.left + distancex;
      const newTop = pos.current.top + distancey;
      // Element dimensions
      const elmntWidth = elmnt.offsetWidth;
      const elmntHeight = elmnt.offsetHeight;
      // Window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      //check if new position is within window boundaries
      if (newLeft >=0 && newLeft + elmntWidth <= windowWidth) {
        elmnt.style.left = `${newLeft}px`;
      }
      if (newTop >= 0 && newTop + elmntHeight <= windowHeight) {
        elmnt.style.top = `${newTop}px`;
      }
    };

    const mouseUpHandler = () => {
      setIsGrab(false);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    elmnt.addEventListener('mousedown', mouseDownHandler);

    return () => {
      elmnt.removeEventListener('mousedown', mouseDownHandler);
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [showPopup]);

  return elmntRef;
}

/**
 * HERO
 */
const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showPopup, setPopup] = useState(false);
  const [isGrab, setIsGrab] = useState(false);
  const elmntRef = useDrag(showPopup, setIsGrab);
  const [content, setContent] = useState('');

  const handleClick = () => {
    setPopup(!showPopup);
    setIsClicked(!isClicked);
  }

  return (
    <section>
      {/* About Section: Folder buttons, popup with About info */}
      <div>
        <button className = "aboutbutton" onClick = {handleClick}>
          <img 
          src = {isClicked ? Aboutopen : Aboutfolder} 
          className = {`aboutfolder ${isClicked ? 'clicked' : ''}`} 
          alt = "Alexandra de'Ath" />
        </button>
        {/*Popup for About folder*/}
        {showPopup ?
        <div className = {`${isGrab ? 'cursor-grabbing' : 'cursor-grab'} aboutPopup`} ref = {elmntRef}>
          <div className = "about-Window bg-white bg-opacity-30 backdrop-filter backdrop-blur">
            <div className = "about-Sidebar">
              <button 
              className = "close-Button" 
              onClick={() => {setPopup(false); setIsClicked(false);}}>
                <img 
                src = {closeButton} 
                alt = "Alexandra de'Ath" 
                className = "close-smile"/>
              </button>
              <p className = "sidebar-1">
                Hello :)
              </p>
              <div className = "sidebar-2">
                <ul>
                  {SidebarData.map((button, index) => (
                    <li key = {index}>
                      <button onClick = {() => setContent(button.content)}>
                        {button.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className = "sidbar-3">
                {content}
              </div>
            </div>
            <div className = "aboutInfo">
              <img 
              src = {mcomp}
              alt = "Alexandra de'Ath" 
              className = "mcomp"/>
            </div>
          </div>
        </div>
        : null}
      </div>
    </section>
  );
};

export default Hero;