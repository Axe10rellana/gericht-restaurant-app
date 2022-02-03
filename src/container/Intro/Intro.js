//importaciones
import React, { useRef, useState } from "react";

//react icons
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

//constantes
import { meal } from "../../constants";

//estilos css
import "../../styles/Intro.css";

const Intro = () => {
  //variables de estado
  const [playVideo, setPlayVideo] = useState(false);

  //referencias
  const vidRef = useRef();

  //funciones
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
