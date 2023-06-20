import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-column">
          <h3>¡Contactanos!</h3>
          <ul>
            <li><a href="#">Castelli 1727 (Buenos Aires)</a></li>
            
            <li><a href="#">Whatsapp: +54 11 2453-2712</a></li>
            <li><a href="#">tarufontana@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Nuestros Horarios</h3>
          <ul>
            <li><a href="#"> Lun a Vier. 9:00 AM - 18:00 PM Sab 10:00 AM - 14:30 PM.</a></li>
            
          </ul>
        </div>
        <div className="footer-column social-icons-column">
          <h3>Redes</h3>
          <ul className="social-icons">
            <li><a href="#"><FontAwesomeIcon  className="icon" icon={faWhatsapp} /></a></li>
            <li><a href="#"><FontAwesomeIcon  className="icon" icon={faInstagram} /></a></li>
            <li><a href="#"><FontAwesomeIcon  className="icon" icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon  className="icon"  icon={faFacebook} /></a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;