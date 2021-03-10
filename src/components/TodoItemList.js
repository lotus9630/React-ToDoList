import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  shouldComponentUpdate(nextPros, nextState) {
    return this.props.todos !== nextPros.todos;
  }

  render() {
    const { todos, onToggle, onRemove, onUpdate } = this.props;

    const todoList = todos.map(({ id, text, checked }) => {
      return (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onRemove={onRemove}
          key={id}
        />
      );
    });
    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
