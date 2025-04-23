import React from 'react';
import './AboutMe.css';
import aboutMeImage from '../../images/aboutMe.jpg';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="name-container">
        <div className="line"></div>
        <h2 className="block_title">About Me</h2>
        <div className="line"></div>
      </div>

      <div className="align-about-me">
        <div className="about-me_div1">
          <p className="about-me_text">
            <span className="fontWeightBold"><u>Junior Full Stack Developer</u></span> with experience in developing dynamic, user-focused web and mobile 
            applications. Proficient in <span className="fontWeightBold">PHP</span>, <span className="fontWeightBold">MySQL</span>, and 
            <span className="fontWeightBold">Flutter</span>. with a strong understanding of both Back-end 
            Architecture and Front-end Design.</p>
        </div>

        <div className="about-me_div2">
          <img className="ImgCorners" src={aboutMeImage} alt="Laith AlQudah" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;