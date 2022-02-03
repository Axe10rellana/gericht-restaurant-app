//importaciones
import React from "react";

//estilos css
import "../../styles/FooterOverlay.css";

const FooterOverlay = () => {
  return (
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-black" />
      <div className="app__footerOverlay-img app__footer_bg" />
    </div>
  );
};

export default FooterOverlay;
