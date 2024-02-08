// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCar, faHome, faTv, faBicycle, faClock, faMapMarkerAlt, faBook, faDog } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGooglePlay, faAppStore, faGoogle, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Popular Categories</h4>
        <ul>
          <li><FontAwesomeIcon icon={faCar} /> Cars</li>
          <li><FontAwesomeIcon icon={faHome} /> Flats for rent</li>
          <li><FontAwesomeIcon icon={faMobile} /> Mobile Phones</li>
          <li><FontAwesomeIcon icon={faBicycle} /> Jobs</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Trending Searches</h4>
        <ul>
          <li><FontAwesomeIcon icon={faBicycle} /> Bikes</li>
          <li><FontAwesomeIcon icon={faClock} /> Watches</li>
          <li><FontAwesomeIcon icon={faBook} /> Books</li>
          <li><FontAwesomeIcon icon={faDog} /> Dogs</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>About Us</h4>
        <ul>
          <li>About Dubizzle Group</li>
          <li>OLX Blog</li>
          <li>Contact Us</li>
          <li>OLX for Businesses</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>OLX</h4>
        <ul>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="social-media-icons">
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faYoutube} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className='our'>Download Our App</h4>
        <ul className="app-download-icons">
          <li><FontAwesomeIcon icon={faAppStore} /></li>
          <li><FontAwesomeIcon icon={faGooglePlay} /></li>
          <li><FontAwesomeIcon icon={faApple} /></li>
          <li><FontAwesomeIcon icon={faGoogle} /></li>
        </ul>
      </div>
      
    </footer>
    <div className='LastFooter'>
<p>Free Classifieds in Pakistan . © 2006-2024 OLX</p>
      </div>
    </>
  );
};

export default Footer;
