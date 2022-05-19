import React from "react";

class TextArea extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <label style={{ alignSelf: "start" }}>Free Text:</label>
        <textarea
          id={this.props.id}
          onChange={(e) => this.props.onChange(this.props.id, e.target.value)}
          rows="4"
          cols="50"
          value={this.props.textAreaVal}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;
