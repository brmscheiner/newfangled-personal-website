import React from 'react';
import technocat from '../public/images/technocat.png';
import '../styles/Footer.css';

const size = 160;

export default function Footer() {
  return (
    <div className="footer">
      <img
        className="technocat"
        src={technocat}
        alt="See the code"
        width={size}
        height={size}
      />
      <a
        href="https://github.com/brmscheiner/newfangled-personal-website"
        className="footer-link"
      >
        Show me the code!
      </a>
    </div>
  );
}
