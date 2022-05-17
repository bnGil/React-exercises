import React from "react";

class Exercise8_1 extends React.Component {
  state = { favoriteColor: "black" };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { favoriteColor: "white" };
      });
    }, 1000);
  }

  componentDidUpdate() {
    const div = document.querySelector("#updated");
    div.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
  }

  render() {
    return (
      <div>
        <h1>{`My favorite color is ${this.state.favoriteColor}`}</h1>
        <div id="updated"></div>
      </div>
    );
  }
}

export default Exercise8_1;
