import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input
        onChange={(e) => this.props.onInputChange(e.target.value)}
        value={this.props.value}
      ></input>
    );
  }
}

export default Input;
