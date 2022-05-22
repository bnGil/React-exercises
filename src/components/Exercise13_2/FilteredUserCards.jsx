import React, { Component } from "react";
import Card from "./Card";

class FilteredUserCards extends Component {
  filterCardsByName = (users, nameStr) => {
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
      return fullName.includes(nameStr.toLowerCase());
    });
    return filteredUsers.map(({ name, cell, email, picture }, idx) => {
      return (
        <Card
          key={idx}
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
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {this.filterCardsByName(this.props.users, this.props.strForFilter)}
      </div>
    );
  }
}

export default FilteredUserCards;
