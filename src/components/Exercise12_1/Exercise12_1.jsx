import React, { Component } from "react";
import chuckNorris from "./api/chuckNorris";
import "./Exercise12_1.css";

class Exercise12_1 extends Component {
  state = { joke: "", categories: [] };

  onRandomJokeClick = async () => {
    const response = await chuckNorris.get("/jokes/random");
    this.setState({ joke: response.data.value });
  };

  onCatJokeClick = async (cat) => {
    const response = await chuckNorris.get("/jokes/random?category=" + cat);
    this.setState({ joke: response.data.value });
  };

  createCatButtons = (arrOfCat) => {
    return arrOfCat.map((catStr, idx) => {
      return (
        <button
          key={idx.toString()}
          onClick={() => this.onCatJokeClick(catStr)}
        >
          {catStr}
        </button>
      );
    });
  };

  async componentDidMount() {
    const categories = await chuckNorris.get("/jokes/categories");
    this.setState({ categories: categories.data });
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.onRandomJokeClick}>random</button>
        <div className="btns-container">
          {this.createCatButtons(this.state.categories)}
        </div>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default Exercise12_1;
