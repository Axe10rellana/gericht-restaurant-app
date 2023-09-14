//importaciones
import React from "react";

//constantes
import { images } from "../../constants";

//estilos css
import "../../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="About Spoon" className="spoon__img" />
          <p className="p__opensans">
            Behind every delicious dish and friendly smile, there is a committed
            and passionate team that works tirelessly to exceed our guests'
            expectations. We pride ourselves on the dedication of our staff,
            from the chefs to the waiters, who are here to make your experience
            unforgettable.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="About Knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="About Spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to Gerícht, where a passion for food meets hospitality to
            offer an exceptional dining experience. Founded in 2021, we have
            spent years perfecting our cuisine and service to satisfy the most
            discerning palates.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
