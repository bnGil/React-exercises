import React from "react";
import "./style.css";

class Box extends React.Component {
  state = { display: "hidden", isUpdated: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { display: "slide" };
      });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.isUpdated === false) {
      setTimeout(() => {
        this.setState((prevState) => {
          return { display: "remove", isUpdated: true };
        });
      }, 4000);
    }
  }

  render() {
    return (
      <div
        className={`box ${this.state.display}`}
        style={{ width: this.props.boxDim, height: this.props.boxDim }}
      ></div>
    );
  }
}

class Exercise8_2 extends React.Component {
  render() {
    return (
      <div>
        <Box boxDim="40px" />
        <Box boxDim="70px" />
        <Box boxDim="20px" />
      </div>
    );
  }
}

export default Exercise8_2;
