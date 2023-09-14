//importaciones
import React from "react";

//constantes
import { images } from "../../constants";

//componentes
import { SubHeading } from "../../components";

//estilos css
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Welcome to Gerícht, where we will take you on an exciting gastronomic
          journey that will awaken your senses and elevate your expectations of
          the culinary experience. At our restaurant, we understand that the
          true essence of fine dining goes beyond the food itself; it is a
          symphony of flavors, aromas, presentation and service that come
          together to create unforgettable moments.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="Header img" />
      </div>
    </div>
  );
};

export default Header;
