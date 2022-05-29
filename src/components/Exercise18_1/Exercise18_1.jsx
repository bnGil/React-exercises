import React, { useState } from "react";
import "./Exercise18_1.css";

function ReadMore({ str, limit }) {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreShown((prevState) => !prevState);
  };

  return (
    <>
      {str.length > limit ? (
        <>
          {isReadMoreShown ? str : str.substring(0, limit)}
          <span className="readmore" onClick={toggleReadMore}>
            {isReadMoreShown ? "...Read less" : "...Read more"}
          </span>
        </>
      ) : (
        str
      )}
    </>
  );
}

function Exercise18_1() {
  const str =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias placeat dolorem rem illo ad, quos nam voluptatum ea repellendus perferendis, recusandae architecto est totam molestiae eaque vero temporibus natus consectetur nemo, tempora nesciunt fugiat impedit veritatis. Vitae eius temporibus consectetur magni quisquam commodi, aut earum maiores dolorem, maxime, velit dolor.";
  return (
    <div>
      <ReadMore str={str} limit={50} />
    </div>
  );
}

export default Exercise18_1;
