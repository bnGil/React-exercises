import React from "react";
import "./Exercise4_1.css";

class Button extends React.Component {
  render() {
    return <button className={this.props.className}>{this.props.text}</button>;
  }
}

class Exercise4_1 extends React.Component {
  render() {
    return (
      <div>
        <Button className="bold" text="Important" />
        <Button text="Not Important" />
      </div>
    );
  }
}

export default Exercise4_1;
