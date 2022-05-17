import React from "react";
import "./Exercise9_1.css";

class Exercise9_1 extends React.Component {
  state = { display: null };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { display: "hide" };
      });
    }, 5000);
  }

  render() {
    return (
      <div className={`container ${this.state.display}`}>
        <div className="spinner"></div>
      </div>
    );
  }
}

export default Exercise9_1;
