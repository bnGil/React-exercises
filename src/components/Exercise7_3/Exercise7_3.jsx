import React from "react";

class Exercise7_3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 0, color: "black" };
  }
  incrementBtn = () => {
    if (this.state.val === 10) return;
    let newColor = this.state.color;
    if (this.state.val === 0) newColor = "green";
    if (this.state.val === -1) newColor = "black";
    this.setState({ val: this.state.val + 1, color: newColor });
  };
  decrementBtn = () => {
    if (this.state.val === -10) return;
    let newColor = this.state.color;
    if (this.state.val === 0) newColor = "red";
    if (this.state.val === 1) newColor = "black";
    this.setState({ val: this.state.val - 1, color: newColor });
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementBtn}>Increment</button>
        <button onClick={this.decrementBtn}>Decrement</button>
        <br />
        <span style={{ color: this.state.color, fontSize: "30px" }}>
          {this.state.val}
        </span>
      </div>
    );
  }
}

export default Exercise7_3;
