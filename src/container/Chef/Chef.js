//importaciones
import React from "react";

//constantes
import { images } from "../../constants";

//componentes
import { SubHeading } from "../../components";

//estilos css
import "../../styles/Chef.css";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What we believe in</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="Quote" />
            <p className="p__opensans">
              At Gerícht, our passion for food and hospitality goes beyond what
              we serve on our plates.
            </p>
          </div>
          <p className="p__opensans">
            We believe in a dining experience that is accompanied by core values
            that guide us in every step we take.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
