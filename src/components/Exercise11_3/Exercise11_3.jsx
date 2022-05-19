import React from "react";
import Confirmation from "./Confirmation";
import InputText from "./InputText";
import SelectAge from "./SelectAge";
import TextArea from "./TextArea";

class Exercise11_3 extends React.Component {
  state = { fname: "", lname: "", age: "0-15", textArea: "", showForm: true };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => {
      return { showForm: !prev.showForm };
    });
  };

  onInputChange = (key, value) => {
    this.setState(() => {
      return { [key]: value };
    });
  };

  render() {
    return (
      <div>
        {this.state.showForm && (
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InputText
              labelText="First Name:"
              id="fname"
              onChange={this.onInputChange}
              inputTextVal={this.state.fname}
            />
            <InputText
              labelText="Last Name:"
              id="lname"
              onChange={this.onInputChange}
              inputTextVal={this.state.lname}
            />
            <SelectAge
              id="age"
              onChange={this.onInputChange}
              value={this.state.age}
            />
            <TextArea
              id="textArea"
              onChange={this.onInputChange}
              textAreaVal={this.state.textArea}
            />
            <input type="submit" value="Continue" />
          </form>
        )}
        {!this.state.showForm && (
          <Confirmation
            fname={this.state.fname}
            lname={this.state.lname}
            age={this.state.age}
            textArea={this.state.textArea}
            onChange={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default Exercise11_3;
