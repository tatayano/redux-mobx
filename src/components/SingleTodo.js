import React from 'react';
import { observer } from 'mobx-react';
@observer
export default class SingleTodo extends React.Component {
  render() {
    return (
      <li>
        <input
          data-id={this.props.todoId}
          checked={this.props.isDone}
          onChange={this.props.archiveToggleTodo}
          type="checkbox"
        />
        <label>{this.props.text}{this.props.isDone ? " - DONE" : ""}</label>
        <button
          data-id={this.props.todoId}
          onClick={this.props.removeTodo}>
          Delete
                </button>
      </li>
    );
  }
}