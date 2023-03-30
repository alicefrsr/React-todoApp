import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  const addTodo = newTask => {
    const newTodos = [...todos, { id: uuidv4(), task: newTask, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = id => {
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
