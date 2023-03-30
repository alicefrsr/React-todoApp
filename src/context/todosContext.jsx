import { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';
import useTodoState from '../hooks/useTodoState';

const initialTodos = [
  { id: 1, task: 'Thing 1', isCompleted: false },
  { id: 2, task: 'Thing 2', isCompleted: true },
  { id: 3, task: 'Thing 3', isCompleted: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // state + methods to alter state
  // const { todos, addTodo, removeTodo, toggleComplete, editTodo } = useTodoState(initialTodos);

  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return <TodosContext.Provider value={{ todos, dispatch }}>{props.children}</TodosContext.Provider>;
}
