import React from "react";

class Exercise7_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  inc = () => {
    const newNum = this.state.num + 1;
    this.setState({ num: newNum });
  };

  render() {
    return (
      <div>
        <button onClick={this.inc}>increment</button>
        {this.state.num}
      </div>
    );
  }
}

export default Exercise7_1;
