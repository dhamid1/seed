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

///below this line is testing code

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../Pages/Ready2Go.css'; // Assuming your CSS styles are here

// const R2GBtnStart = () => {
//     const [readyVar, setReadyVar] = useState(0);

//     const fetchState = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/get-state');
//             setReadyVar(response.data.state);
//         } catch (error) {
//             console.error('Error fetching state:', error);
//         }
//     };

//     useEffect(() => {
//         fetchState();
//         const interval = setInterval(fetchState, 10000); // Fetch state every 10 seconds
//         return () => clearInterval(interval);
//     }, []);

//     const handleClick = async () => {
//         try {
//             const newState = (readyVar + 1) % 3;
//             await axios.post('http://localhost:3000/update-state', { state: newState });
//             fetchState(); // Fetch the updated state
//         } catch (error) {
//             console.error('Error updating state:', error);
//         }
//     };

//     // Determine button style based on readyVar
//     const getButtonStyle = () => {
//         switch (readyVar) {
//             case 1:
//                 return { backgroundColor: '#333', color: 'white' }; // Style for "Waiting..."
//             case 2:
//                 return { backgroundColor: 'green', color: 'white' }; // Style for "Ready2Go"
//             default:
//                 return {}; // Default style
//         }
//     };

//     return (
//         <div className="ready2go">
//             {/* ... other components ... */}
//             <div className='r2gBox'>
//                 <h2>Ready 2 Go?</h2>
//                 <button 
//                     className="ready2goBtn"
//                     style={getButtonStyle()}
//                     onClick={handleClick}
//                 >
//                     <span>{readyVar === 1 ? 'Waiting...' : readyVar === 2 ? 'Ready2Go' : 'Ready?'}</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default R2GBtnStart;