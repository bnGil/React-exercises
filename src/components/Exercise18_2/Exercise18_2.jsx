import React, { useState } from "react";
import "./Exercise18_2.css";

const fetchedData = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false }, //5
];

export function Todo() {
  const [data, setData] = useState(fetchedData);

  const toggleCompleted = (idx) => {
    setData((prev) => {
      //? Deep clone solution ↓
      //   const json = JSON.stringify(prev);
      //   const nD = JSON.parse(json);
      //   nD[idx].completed = !nD[idx].completed;
      //? shallow clone solution ↓
      //   const newData = [...prev];
      // newData[idx] = { ...newData[idx], completed: !newData[idx].completed };
      //? shallow clone solution ↓
      return prev.map((obj, index) => {
        if (idx === index) {
          return { ...obj, completed: !obj.completed };
        }
        return obj;
      });
      //? shallow clone solution ↓
      //   const newData = [...prev];
      //   console.log(newData[idx]);
      //   newData[idx].completed = !newData[idx].completed;
      //   return newData;
    });
  };

  const renderedItems = () =>
    data.map((item, idx) => {
      return (
        <div key={item.name} className="container">
          <h2 className={item.completed ? "deleted" : ""}>{item.name}</h2>
          <h2 className="btn" onClick={() => toggleCompleted(idx)}>
            {item.completed ? <>&#10004;</> : "X"}
          </h2>
        </div>
      );
    });

  return <div>{renderedItems()}</div>;
}
