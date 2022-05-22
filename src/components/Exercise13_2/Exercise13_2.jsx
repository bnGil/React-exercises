import React, { Component } from "react";
import Input from "./Input";
import FilteredUserCards from "./FilteredUserCards";

class Exercise13_2 extends Component {
  state = { users: [], inputValue: "" };

  handleIputChange = (str) => {
    this.setState({ inputValue: str });
  };

  async componentDidMount() {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const users = await response.json();
    this.setState({ users: users.results });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          onInputChange={this.handleIputChange}
          value={this.state.inputValue}
        />
        <FilteredUserCards
          users={this.state.users}
          strForFilter={this.state.inputValue}
        />
      </div>
    );
  }
}

export default Exercise13_2;
