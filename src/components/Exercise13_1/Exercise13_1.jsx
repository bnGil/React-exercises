import React, { Component } from "react";
import Card from "./Card";
import data from "./data";
import Name from "./Name";

const getNames = (arrOfPeople) => {
  return arrOfPeople.map((person) => person.name);
};

const getBornBefore1990 = (arrOfPeople) => {
  return arrOfPeople.filter((person) => person.birthday.split("-")[2] < 1990);
};

class Exercise13_1 extends Component {
  state = { names: getNames(data), bornBefore1990: getBornBefore1990(data) };

  render() {
    return (
      <div>
        <Name names={this.state.names} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {this.state.bornBefore1990.map((person, idx) => (
            <Card key={idx} person={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default Exercise13_1;
