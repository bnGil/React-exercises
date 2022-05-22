import React, { Component } from "react";

class Name extends Component {
  renderedNames = (names) => {
    return names.map((name, idx) => <li key={idx}>{name}</li>);
  };

  render() {
    return <ul>{this.renderedNames(this.props.names)}</ul>;
  }
}

export default Name;
