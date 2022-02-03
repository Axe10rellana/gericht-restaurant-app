//importaciones
import React from "react";

//estilos css
import "../../styles/BtnScroll.css";

const BtnScroll = () => {
  //funciones
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <i className="fas fa-arrow-alt-circle-up"></i>
      </button>
    </div>
  );
};

export default BtnScroll;
