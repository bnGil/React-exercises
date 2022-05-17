import React from "react";

class Exercise7_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return { num: prevState.num + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <span>{this.state.num}</span>
      </div>
    );
  }
}

export default Exercise7_1;
