import { useState } from "react";

const dataArr = ["one", "two", "three", "four", "five"];

function Exercise18_4() {
  const [arr, setArr] = useState(dataArr);
  const [copyArr, setCopyArr] = useState(arr);
  const [checkedArr, setCheckedArr] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const paintCheckboxes = () => {
    return arr.map((numStr, idx) => {
      return (
        <div key={numStr}>
          <input
            type="checkbox"
            id={numStr}
            onChange={() => onCheckboxChange(numStr)}
          />
          <label htmlFor={numStr}>{numStr}</label>
        </div>
      );
    });
  };

  const onCheckboxChange = (numStr) => {
    setCheckedArr((prev) => {
      return arr.map((str, idx) => {
        if (str === numStr) {
          return !prev[idx];
        }
        return prev[idx];
      });
    });
  };

  const onDeleteClick = () => {
    const newArr = [];
    const newCheckedArr = [];
    arr.forEach((numStr, idx) => {
      if (!checkedArr[idx]) {
        newArr.push(numStr);
        newCheckedArr.push(checkedArr[idx]);
      }
    });
    setArr(newArr);
    setCheckedArr(newCheckedArr);
  };

  const onResetClick = () => {
    setArr(copyArr);
  };

  return (
    <>
      <button onClick={onDeleteClick}>Delete</button>
      <button onClick={onResetClick}>Reset</button>
      {paintCheckboxes()}
    </>
  );
}

export default Exercise18_4;
