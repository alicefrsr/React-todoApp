import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

  return {
    todos,
    // addTodo: newTask => {
    //   const newTodos = [...todos, { id: uuidv4(), task: newTask, isCompleted: false }];
    //   setTodos(newTodos);
    // },
    // removeTodo: id => {
    //   setTodos(todos.filter(t => t.id !== id));
    // },

    // toggleComplete: id => {
    //   const updatedTodos = todos.map(todo => {
    //     return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    //   });
    //   setTodos(updatedTodos);
    // },

    // editTodo: (id, editedTask) => {
    //   const updatedTodos = todos.map(todo => {
    //     return todo.id === id ? { ...todo, task: editedTask } : todo;
    //   });
    //   setTodos(updatedTodos);
    // },
  };
};
