import { useRef } from "react";
import video from "./video.mp4";

function Exercise21_2() {
  const vidRef = useRef();

  const startPlaying = (vid) => {
    vidRef.current.play();
  };

  const stopPlaying = (vid) => {
    vidRef.current.pause();
  };

  return (
    <>
      <div>
        <video ref={vidRef} width="320" height="240">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div>
        <button onClick={() => startPlaying(vidRef)}>Play</button>
        <button onClick={() => stopPlaying(vidRef)}>Pause</button>
      </div>
    </>
  );
}

export default Exercise21_2;
