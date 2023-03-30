import { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultValues = [
  { id: 1, task: 'Thing 1', isCompleted: false },
  { id: 2, task: 'Thing 2', isCompleted: true },
  { id: 3, task: 'Thing 3', isCompleted: false },
];

export const TodosContext = createContext();
// splitting into 2 contexts to separate the state and methods changing the state, as most components are consuming dispatch
export const DispatchContext = createContext();

export function TodosProvider(props) {
  // const { todos, addTodo, removeTodo, toggleComplete, editTodo } = useTodoState(initialTodos);
  // const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [todos, dispatch] = useLocalStorageReducer('keys', defaultValues, todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
