import React, { Component } from "react";
import "./style.css";

import data from "./todoList";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

class App extends Component {
  state = { todoList: [], formInput: "" };

  componentDidMount() {
    this.setState({ todoList: data });
  }

  createTodoList = () => {
    return this.state.todoList.map((todoItem) => {
      return (
        <TodoItem
          key={todoItem.id}
          todoText={todoItem.todo}
          id={todoItem.id}
          onDeleteClick={this.handleDeleteTodo}
          onEditClick={this.editTodoItem}
        />
      );
    });
  };

  handleFormChange = (e) => {
    this.setState({ formInput: e.target.value });
  };

  handleDeleteTodo = (id) => {
    const newList = this.state.todoList.filter((todo) => todo.id !== id);
    this.setState((prevState) => {
      return { todoList: newList };
    });
  };

  addTodoItem = (e) => {
    e.preventDefault();
    if (!this.state.formInput) {
      return;
    }
    const id = Math.random();
    this.setState((prevState) => {
      return {
        todoList: [
          ...prevState.todoList,
          { todo: prevState.formInput, id: id },
        ],
        formInput: "",
      };
    });
  };

  editTodoItem = (id, todoText) => {
    const editedTodoList = this.state.todoList.map((todo) => {
      if (todo.id === id) {
        return { todo: todoText, id };
      } else {
        return todo;
      }
    });
    this.setState({ todoList: editedTodoList });
  };

  render() {
    return (
      <div className="app-container">
        <div className="form-container">
          <AddTodoForm
            onInputChange={this.handleFormChange}
            inputVal={this.state.formInput}
            onAddClick={this.addTodoItem}
          />
        </div>
        {this.createTodoList()}
      </div>
    );
  }
}

export default App;
