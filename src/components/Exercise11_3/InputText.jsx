import React from "react";

class InputText extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.labelText}</label>
        <input
          type="text"
          id={this.props.id}
          onChange={(e) => this.props.onChange(this.props.id, e.target.value)}
        />
      </div>
    );
  }
}

export default InputText;
