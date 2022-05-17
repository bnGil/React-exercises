import React from "react";
import "./style.css";

class Exercise8_3 extends React.Component {
  state = { shape: "box", flag: true, color: "red", counter: 0 };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState((prevState) => {
          return {
            color: "blue",
            counter: prevState.counter + 1,
            flag: false,
          };
        }),
      500
    );
  }

  componentDidUpdate() {
    setTimeout(
      () =>
        this.setState((prevState) => {
          return {
            color: prevState.flag === true ? "blue" : "red",
            counter: prevState.counter + 1,
            flag: !prevState.flag,
            shape: prevState.counter > 5 ? "circle" : "box",
          };
        }),
      500
    );
  }

  render() {
    return <div className={`${this.state.shape} ${this.state.color}`}></div>;
  }
}

export default Exercise8_3;
