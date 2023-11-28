import React, { useEffect, useState } from 'react';
import '../Pages/Ready2Go.css'; 
import '../Pages/HomePage.css';
import Banner from '../components/Banner';

const R2GBtnStart = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isWaiting, setIsWaiting] = useState(false);  // State for button status

    useEffect(() => {
        const ready2goBtn = document.querySelector('.ready2goBtn');

        const handleMouseMove = (e) => {
            const x = e.pageX - ready2goBtn.offsetLeft;
            const y = e.pageY - ready2goBtn.offsetTop;
            setMousePosition({ x, y });
        };

        ready2goBtn.addEventListener('mousemove', handleMouseMove);

        // Clean up
        return () => {
            ready2goBtn.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleClick = () => {
        setIsWaiting(!isWaiting);  // Toggle the state
    };

    return (
        <div className="ready2go">
            <header>
                <Banner />
            </header>
            <div className='r2gBox'>
                <h2>Ready 2 Go?</h2>
                <button 
                    className="ready2goBtn"
                    style={{ 
                        '--x': `${mousePosition.x}px`, 
                        '--y': `${mousePosition.y}px`,
                        backgroundColor: isWaiting ? '#333' : '',  // Change color based on state
                    }}
                    onClick={handleClick}
                >
                    <span>{isWaiting ? 'Waiting...' : 'Ready?'}</span>  {/* Change text based on state */}
                </button>
            </div>
        </div>
    );
};

export default R2GBtnStart;
