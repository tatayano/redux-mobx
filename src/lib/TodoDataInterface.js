import { observable, action } from 'mobx';
import Todo from './Todo';
import { findIndex } from 'lodash';

export default class TodoDataInterface {

  @observable todos = [];
  
  constructor() {
    this.completeTodo = this.completeTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  @action
  addTodo(descriptionText) {
    if (descriptionText) {
      const newTodo = new Todo(descriptionText);
      this.todos.push(newTodo);
      return newTodo;
    }
  }

  @action
  completeTodo(todoId) {
    const todoIndex = findIndex(this.todos, (todo) => todo.id === todoId);
    if (todoIndex > -1) {
      this.todos[todoIndex].isDone = !this.todos[todoIndex].isDone
    }
  }

  @action
  removeTodo(todoId) {
    const todoIndex = findIndex(this.todos, (todo) => todo.id === todoId);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
    }
  }

  @action
  getAllTodos() {
    return this.todos.map(todo => todo);
  }
}