import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma5 mt0'>
      <Tilt className="Tilt br3 shadow-3" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
       <div className="Tilt-inner pa3"><img style={{paddingTop: '2px'}} alt='logo' src={logo}/></div>
      </Tilt>
    </div>
  );
}

export default Logo;
