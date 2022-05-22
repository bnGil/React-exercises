import React, { Component } from "react";
import "./Exercise13_2.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>Name: {this.props.name}</p>
        <p>Email: {this.props.email}</p>
        <p>Cell: {this.props.cell}</p>
        <img src={this.props.picture}></img>
      </div>
    );
  }
}

export default Card;
