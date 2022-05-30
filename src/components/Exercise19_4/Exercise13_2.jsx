import React, { Component, useState, useEffect } from "react";
import axios from "axios";
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

function Exercise13_2() {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleIputChange = (str) => {
    setInputValue(str);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        setUsers(users.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Input onInputChange={handleIputChange} value={inputValue} />
      <FilteredUserCards users={users} strForFilter={inputValue} />
    </div>
  );
}

export default Exercise13_2;
