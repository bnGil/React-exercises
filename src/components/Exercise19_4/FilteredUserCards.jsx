import React from "react";
import Card from "./Card";
import "./Exercise13_2.css";

function FilteredUserCards({ users, strForFilter }) {
  const filterCardsByName = (users, nameStr) => {
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

  return (
    <div className="cards-container">
      {filterCardsByName(users, strForFilter)}
    </div>
  );
}

export default FilteredUserCards;
