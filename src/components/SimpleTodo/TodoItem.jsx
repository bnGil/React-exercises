import React, { Component } from "react";

class TodoItem extends Component {
  state = { isEditting: false, editInput: this.props.todoText };

  startEdit = () => {
    this.setState({ isEditting: true });
  };

  onEditInputChange = (e) => {
    this.setState({ editInput: e.target.value });
  };

  render() {
    return (
      <div className="todoitem-container">
        <input
          type="text"
          value={this.state.editInput}
          readOnly={!this.state.isEditting}
          onChange={this.onEditInputChange}
        />
        <div className="btns-container">
          {this.state.isEditting ? (
            <button
              onClick={() => {
                this.props.onEditClick(this.props.id, this.state.editInput);
                this.setState({ isEditting: false });
              }}
            >
              OK
            </button>
          ) : (
            <button onClick={this.startEdit}>Edit</button>
          )}
          <button onClick={() => this.props.onDeleteClick(this.props.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
