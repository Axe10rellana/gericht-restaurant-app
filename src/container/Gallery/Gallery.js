//importaciones
import React, { useRef } from "react";

//react icons
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

//constantes
import { images } from "../../constants";

//componentes
import { SubHeading } from "../../components";

//estilos css
import "../../styles/Gallery.css";

const Galleryimages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  //referencias
  const scrollRef = useRef(null);

  //funciones
  const scroll = (direction) => {
    const { current } = scrollRef;

    direction === "left"
      ? (current.scrollLeft -= 300)
      : (current.scrollLeft += 300);
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Welcome to our Photo Gallery. Each image captures the delicious
          creation of our dishes and drinks prepared with passion and care.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {Galleryimages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
