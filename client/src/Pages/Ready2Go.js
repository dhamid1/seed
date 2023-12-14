//import React, { useEffect, useState } from 'react';
import './Ready2Go.css'; 
import './HomePage.css';
/*import Banner from '../components/Banner';*/
import R2GBtnStart from '../components/R2GBtnStart';

const Ready2Go = () => {
  return (
  < R2GBtnStart />
  );
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const ready2goBtn = document.querySelector('.ready2goBtn');

  //   const handleMouseMove = (e) => {
  //     const x = e.pageX - ready2goBtn.offsetLeft;
  //     const y = e.pageY - ready2goBtn.offsetTop;
  //     setMousePosition({ x, y });
  //   };

  //   ready2goBtn.addEventListener('mousemove', handleMouseMove);

  //   // Clean up
  //   return () => {
  //     ready2goBtn.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // return (
  //   <div className="ready2go">
  //     <header>
  //       <Banner />
  //     </header>
  //     <div className='r2gBox'>
  //       <h2>Ready 2 Go?</h2>
  //       <button 
  //         className="ready2goBtn"
  //         style={{ '--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px` }}
  //       >
  //         <span>Ready?</span>
  //       </button>
  //     </div>
  //   </div>
  // );
};

export default Ready2Go;