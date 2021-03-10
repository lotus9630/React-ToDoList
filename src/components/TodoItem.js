import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  state = {
    mode: "normal",
    id: this.props.id,
    text: this.props.text,
  };

  changeInput = (e) => {
    this.setState({
      text: e.target.value,
    });
    this.props.onUpdate(this.state.id, e.target.value);
  };

  render() {
    let { checked, id, onToggle, onRemove } = this.props;
    let text = this.state.text;
    let buttons;
    if (this.state.mode === "normal") {
      buttons = [
        <div
          key="update-button"
          className="update-button"
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              mode: "update",
            });
          }}
        >
          수정
        </div>,
        <div
          key="remove-button"
          className="remove-button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          삭제
        </div>,
      ];
    } else if (this.state.mode === "update") {
      text = (
        <input
          value={this.state.text}
          onChange={(e) => {
            e.stopPropagation();
            this.changeInput(e);
          }}
        />
      );
      buttons = [
        <div
          key="confirm-button"
          className="confirm-button"
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              mode: "normal",
            });
          }}
        >
          확인
        </div>,
        <div
          key="cancle-button"
          className="cancle-button"
          onClick={(e) => {
            e.stopPropagation();
            this.setState({
              mode: "normal",
            });
          }}
        >
          취소
        </div>,
      ];
    }
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className={`todo-text ${checked && "checked"}`}>{text}</div>
        {buttons}
      </div>
    );
  }
}

export default TodoItem;
