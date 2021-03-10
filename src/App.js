import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3; // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: "",
    todos: [
      { id: 0, text: "밥 먹기", checked: false },
      { id: 1, text: "일어나기", checked: true },
      { id: 2, text: "잠자기", checked: false },
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value, // input으로 들어온 값
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleUpdate = (id, text) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const newtodos = [...todos];
    newtodos[index] = { id: id, text: text, checked: false };
    this.setState({
      todos: newtodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;

    const {
      handleKeyPress,
      handleChange,
      handleCreate,
      handleToggle,
      handleUpdate,
      handleRemove,
    } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onUpdate={handleUpdate}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
