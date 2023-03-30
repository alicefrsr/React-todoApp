import { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const initialTodos = [
  { id: 1, task: 'Thing 1', isCompleted: false },
  { id: 2, task: 'Thing 2', isCompleted: true },
  { id: 3, task: 'Thing 3', isCompleted: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // state + methods to alter state
  const { todos, addTodo, removeTodo, toggleComplete, editTodo } = useTodoState(initialTodos);

  return <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleComplete, editTodo }}>{props.children}</TodosContext.Provider>;
}
