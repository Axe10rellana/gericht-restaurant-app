//importaciones
import React from "react";

//react icons
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

//constantes
import { images } from "../../constants";

//componentes
import { FooterOverlay, Newsletter } from "../../components";

//estilos css
import "../../styles/Footer.css";

const Footer = () => {
  //variables
  const anioActual = new Date().getFullYear();

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="Footer Logo" />
          <p className="p__opensans">
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others.”
          </p>
          <img
            src={images.spoon}
            alt="Spoon"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 Am -12:00 Am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 Pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">{anioActual} Gerich. All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
