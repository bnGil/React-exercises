import React from "react";

class Exercise14_2 extends React.Component {
  constructor() {
    super();

    this.textArea = React.createRef();
  }

  copyText = () => {
    const text = this.textArea.current.value;
    this.textArea.current.select();
    navigator.clipboard.writeText(text);
  };

  render() {
    return (
      <>
        <textarea ref={this.textArea} cols="30" rows="10"></textarea>
        <button onClick={this.copyText}>Copy</button>
      </>
    );
  }
}

export default Exercise14_2;
