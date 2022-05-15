import React from "react";

class Exercise2_2 extends React.Component {
  render() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 = 6;
    const string = "I love React!";
    return (
      <div>
        <div>{data[0] + " " + data[1]}</div>
        <div>{number1 + number2}</div>
        <div>{string}</div>
      </div>
    );
  }
}

export default Exercise2_2;
