import React from "react";
import "./Exercise4_2.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.imageSrc} className="image"></img>
        <h2>{this.props.header}</h2>
        <p>{this.props.description}</p>
        <div className="links-container">
          <a href={this.props.shareLink} target="_blank" className="link">
            SHARE
          </a>
          <a href={this.props.exploreLink} className="link">
            EXPLORE
          </a>
        </div>
      </div>
    );
  }
}

class Exercise4_2 extends React.Component {
  render() {
    return (
      <div className="cards-container">
        <Card
          header="Something1"
          description="Description1"
          imageSrc="https://picsum.photos/201"
          shareLink="https://facebook.com"
          exploreLink="https://google.com"
        />
        <Card
          header="Something2"
          description="Description2"
          imageSrc="https://picsum.photos/200"
          shareLink="https://facebook.com"
          exploreLink="https://google.com"
        />
        <Card
          header="Something3"
          description="Description3"
          imageSrc="https://picsum.photos/199"
          shareLink="https://facebook.com"
          exploreLink="https://google.com"
        />
      </div>
    );
  }
}

export default Exercise4_2;
