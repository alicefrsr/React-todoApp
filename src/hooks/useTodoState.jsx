import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
  // const [todos, setTodos] = useState(initialTodos);
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const addTodo = newTask => {
    const newTodos = [...todos, { id: uuidv4(), task: newTask, isCompleted: false }];
    // call setTodos with new todos array
    setTodos(newTodos);
  };

  const removeTodo = id => {
    // new todos = filter out removed todo using its id
    // call setTodos with new todos array
    setTodos(todos.filter(t => t.id !== id));
  };

  const editTodo = (id, editedTask) => {
    const updatedTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, task: editedTask } : todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    });
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleComplete: toggleComplete,
    editTodo: editTodo,
  };
};
