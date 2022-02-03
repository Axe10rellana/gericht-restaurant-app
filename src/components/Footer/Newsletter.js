//importaciones
import React from "react";

//componentes
import SubHeading from "../SubHeading/SubHeading";

//estilos css
import "../../styles/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Suscribe To our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          name="email"
          placeholder="Enter your e-mail address"
          autoComplete="off"
          required
        />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
