import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain2.jpg'
const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt  shadow-2" options={{ scale: 1.1, max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner "> <img src={brain} alt='logo' /> </div>
            </Tilt>

        </div>
    );
}

export default Logo;