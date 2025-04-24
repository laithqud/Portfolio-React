import React from 'react';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faMobile, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactMe = () => {
  return (
    <section id="contact-me">
      <div className="name-container">
        <div className="line"></div>
        <h2 className="block_title">Contact Me</h2>
        <div className="line"></div>
      </div>
      
      <div className="contact-me_container">
        <div className="contact-me_div1 fontSize25px">
          I'd love to hear from you—whether you have a project in mind, a question, or just want to chat. Feel 
          free to drop me a message below, and I'll get back to you as soon as possible.Let's connect and
          explore how we can work together to bring your ideas to life!
        </div>
        <div className="contact-me_div2">
          <div className="contact-me_div2-item1">
            <div className="contact-me_icon-links">
              <FontAwesomeIcon icon={faLocationDot} size="lg" style={{ color: '#000000' }} />
              <p className="contact-me_p"><a href="https://maps.app.goo.gl/nMtUSyRNLEzWw1LaA" className="undrline">Amman - Jordan</a></p>
            </div>    
            <div className="contact-me_icon-links">
              <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color: '#000000' }} />
              <p className="contact-me_p"><a href="mailto:laithqudahh@gmail.com" className="undrline"> laithqudahh@gmail</a></p>
            </div>    
            <div className="contact-me_icon-links">
              <FontAwesomeIcon icon={faMobile} size="lg" style={{ color: '#000000' }} />
              <p className="contact-me_p"><a href="tel:+00962 798151409" className="undrline"> 00962 798151409</a></p>
            </div>    
            {/* <div className="contact-me_icon-links">
              <FontAwesomeIcon icon={faGlobe} size="lg" style={{ color: '#000000' }} />
              <p className="contact-me_p"><a href="https://buymeacoffee.com/" className="undrline">BuyMeCoffee</a></p>
            </div>    */}
          </div>

          <div className="contact-me_div2-item2">
            <p className="contact-me_findMeOn">Find me on</p>
            <ul className="contact-me_ul">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: '#000000' }} /></li></a>
              <a href="https://www.linkedin.com/in/laith-al-qudah-88bb45254/" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: '#000000' }} /></li></a>
              <a href="https://github.com/laithqud" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faGithub} size="xl" style={{ color: '#000000' }} /></li></a>
              <a href="https://x.com/?lang=en&mx=2" target="_blank" rel="noopener noreferrer"><li><FontAwesomeIcon icon={faXTwitter} size="xl" style={{ color: '#000000' }} /></li></a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;