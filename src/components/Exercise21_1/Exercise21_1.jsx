import React, { useState, useEffect, useRef } from "react";

function Exercise21_1() {
  const [isInputShown, setIsInputShown] = useState(false);
  const inputRef = useRef();

  const focus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focus();
  }, [isInputShown]);

  return (
    <div>
      <button
        onClick={() => {
          setIsInputShown((prev) => !prev);
        }}
      >
        Edit
      </button>
      <div>
        {isInputShown && (
          <div>
            <input ref={inputRef} type="text" />
            <button>Save</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Exercise21_1;
