import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header id="header">
      <div className="header-divs header-div1">
        <h1 className="header-div1-h1">Laith Al Qudah</h1>
        <h4 className="header-div1-h4">Full Stack Developer</h4>
      </div>
      <div className="header-divs header-div2">
        <a href="#about-me">
          <FontAwesomeIcon icon={faArrowDown} style={{ color: '#dddddd' }} />
        </a>
      </div>
    </header>
  );
};

export default Header;