import React, { Component } from "react";

class Exercise14_1 extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <form>
        <label htmlFor="fname">First Name: </label>
        <input ref={this.textInput} type="text" name="fname" id="fname" />
        <input type="submit" value="Confirm" />
      </form>
    );
  }
}

export default Exercise14_1;
