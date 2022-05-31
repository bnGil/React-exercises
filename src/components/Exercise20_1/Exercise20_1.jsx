import { useState, useEffect } from "react";
import FetchedData from "./FetchedData";

function Exercise20_1() {
  const [isDataShown, setIsDataShown] = useState(true);
  return (
    <>
      <button onClick={() => setIsDataShown((prev) => !prev)}>Show/Hide</button>
      <div>{isDataShown && <FetchedData />}</div>
    </>
  );
}

export default Exercise20_1;
