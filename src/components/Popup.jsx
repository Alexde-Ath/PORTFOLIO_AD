import { closeButton } from '../assets';
import React, { useState, useEffect, useRef } from 'react';

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

// Variable Popup has two sidebars in a column and third column shows content
const Popup = ({ showPopup, onClose, SidebarData }) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [isGrab, setIsGrab] = useState(false);
    const elmntRef = useDrag(showPopup, setIsGrab);
    const [content, setContent] = useState(SidebarData[0].content); //Set initial
    const [zIndex, setIndex] = useState(0);

    // handler for click for popup windows - TODO:Change to if pressed
    const handleClick = () => {
        setIndex(zIndex + 1);
    };
  
    return showPopup ? (
        // If grab popup window turn cursor to grabbing and move popup with useDrag
        <div className={`${isGrab ? 'cursor-grabbing' : 'cursor-grab'} aboutPopup`} ref={elmntRef} style={{zIndex}} onClick={handleClick}>
            <div className="about-Window bg-white bg-opacity-30 backdrop-filter backdrop-blur">
                <div className="about-Sidebar">
                    <button className="close-Button" onClick={onClose}>
                        <img 
                        src={closeButton} 
                        alt="Alexandra de'Ath" 
                        className="close-smile" />
                    </button>
                    <div className="sidebar-2">
                        <ul>
                            {SidebarData.map((button, index) => (
                            <li
                                key={index}
                                className={`${selectedButton === index ? 'bg-blue-500' : ''} hover:bg-blue-300`}
                                onClick={() => {
                                setContent(button.content);
                                setSelectedButton(index);
                                }}
                            >
                                <button>{button.label}</button>
                            </li>
                            ))}
                        </ul>
                    </div>
                <div className="sidebar-3">{content}</div>
            </div>
        </div>
    </div>
    ): null;
};
  
export default Popup;