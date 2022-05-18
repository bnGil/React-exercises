import React from "react";

class Confirmation extends React.Component {
  state = { isSent: false };

  sendSurvey = () => {
    this.setState({ isSent: true });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>{this.props.fname}</h2>
        <h2>{this.props.lname}</h2>
        <h2>{this.props.age}</h2>
        <h2>{this.props.textArea}</h2>
        <div>
          <button onClick={this.props.onChange}>Back</button>
          <button onClick={this.sendSurvey}>Send Survey</button>
        </div>
        {this.state.isSent && <h1>Survey has been sent succesfuly!</h1>}
      </div>
    );
  }
}

export default Confirmation;
