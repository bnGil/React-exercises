import React, { Component } from "react";
import Card from "./Card";
import "./Exercise13_2.css";

class FilteredUserCards extends Component {
  filterCardsByName = (users, nameStr) => {
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
      return fullName.includes(nameStr.toLowerCase());
    });
    return filteredUsers.map(({ name, cell, email, picture }) => {
      return (
        <Card
          key={cell}
          name={`${name.first} ${name.last}`}
          cell={cell}
          email={email}
          picture={picture.large}
        />
      );
    });
  };

  render() {
    return (
      <div className="cards-container">
        {this.filterCardsByName(this.props.users, this.props.strForFilter)}
      </div>
    );
  }
}

export default FilteredUserCards;
