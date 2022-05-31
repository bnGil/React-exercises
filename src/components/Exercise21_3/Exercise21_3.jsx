import { useRef } from "react";
import img1 from "./images/img1.jpg";
import img1bw from "./images/img1bw.jpg";
import img2 from "./images/img2.jpg";
import img2bw from "./images/img2bw.jpg";

function Exercise21_3() {
  const img1Ref = useRef();
  const img2Ref = useRef();
  return (
    <>
      <div>
        <img
          width="400px"
          ref={img1Ref}
          src={img1bw}
          onMouseEnter={() => (img1Ref.current.src = img1)}
          onMouseLeave={() => (img1Ref.current.src = img1bw)}
        />
      </div>
      <div>
        <img
          width="400px"
          ref={img2Ref}
          src={img2bw}
          onMouseEnter={() => (img2Ref.current.src = img2)}
          onMouseLeave={() => (img2Ref.current.src = img2bw)}
        />
      </div>
    </>
  );
}

export default Exercise21_3;
