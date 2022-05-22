import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, birthday, favoriteFoods } = this.props.person;
    return (
      <div style={{ border: "1px solid black", margin: "2px", padding: "5px" }}>
        <p>Name: {name}</p>
        <p>Birthday: {birthday}</p>
        <p>favorite meats: {favoriteFoods.meats}</p>
        <p>favorite fish: {favoriteFoods.fish}</p>
      </div>
    );
  }
}

export default Card;
