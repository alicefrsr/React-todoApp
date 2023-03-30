import { v4 as uuidv4 } from 'uuid';

// const todoReducer = (state, action) => {
const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'ADD':
      return [...todos, { id: uuidv4(), task: action.task, isCompleted: false }];
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE_COMPLETE':
      return todos.map(todo => (todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    case 'EDIT':
      return todos.map(todo => (todo.id === action.id ? { ...todo, task: action.editedTask } : todo));
    default:
      return todos;
  }
};

export default todoReducer;

// {type: 'ADD', task: 'newTask'}
// {type: 'REMOVE', id: '1234'}
// {type: 'COMPLETED', id: '4567'}
// {type: 'EDIT', id: '7890', task: 'editedTask'}
