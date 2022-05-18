import React from "react";

class CustomButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick(this.props.btnColor);
        }}
        style={{ backgroundColor: this.props.btnColor }}
      >
        {this.props.btnColor}
      </button>
    );
  }
}

class Exercise11_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: "" };
    this.colors = ["blue", "red", "yellow"];
  }

  createCustomButtons = (arrOfColors) => {
    return arrOfColors.map((color) => (
      <CustomButton btnColor={color} onClick={this.returnSelectedColor} />
    ));
  };

  returnSelectedColor = (returnedColor) => {
    this.setState({ selectedColor: returnedColor });
  };

  render() {
    return (
      <div>
        {this.createCustomButtons(this.colors)}
        <h1>The selected color is: {this.state.selectedColor}</h1>
      </div>
    );
  }
}

export default Exercise11_1;
