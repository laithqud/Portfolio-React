import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="div-footer">
        &copy; {new Date().getFullYear()} Copyright: Laith AlQudah 
      </div>
    </footer>
  );
};

export default Footer;