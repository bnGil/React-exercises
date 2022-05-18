import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={() => this.props.handleChange(this.props.id)}
        />
        <label>{this.props.text}</label>
      </div>
    );
  }
}

class Exercise11_2 extends React.Component {
  state = { c1: false, c2: false, c3: true, c4: true };

  handleChange = (id) => {
    this.setState((prev) => {
      return { [id]: !prev[id] };
    });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Checkbox
          id="c1"
          text=" I read the term of the app"
          checked={this.state.c1}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="c2"
          text=" I accept the term of the app"
          checked={this.state.c2}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="c3"
          text=" I want to get the weekly news letter"
          checked={this.state.c3}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="c4"
          text=" I want to get sales and offers"
          checked={this.state.c4}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Exercise11_2;
