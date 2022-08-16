import React from 'react';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Get in Touch</h2>
      <p> Email : ankitmahotla45@gmail.com</p>

      <div className="app__footer-cards" id='Contact'>
        <div className="app__footer-card ">
          <a href="https://github.com/ankitmahotla" className="p-text"><AiFillGithub/></a>
        </div>
        <div className="app__footer-card ">
          <a href="https://www.linkedin.com/in/ankit-mahotla-012a73244/" className="p-text"><AiFillLinkedin/></a>
        </div>
      </div>
    </>
  );
};

export default Footer;