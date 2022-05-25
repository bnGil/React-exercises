import React, { Component } from "react";

class AddTodoForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Todo"
          onChange={(e) => {
            this.props.onInputChange(e);
          }}
          value={this.props.inputVal}
        />
        <button onClick={this.props.onAddClick}>Add</button>
      </form>
    );
  }
}

export default AddTodoForm;
