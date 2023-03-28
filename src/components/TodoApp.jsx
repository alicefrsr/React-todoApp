// import { useEffect } from 'react';
import useTodoState from '../hooks/useTodoState';

import './TodoApp.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || []);
  const initialTodos = [
    { id: uuidv4(), task: 'finish this todo app', isCompleted: false },
    { id: uuidv4(), task: 'useContext, useReducer', isCompleted: true },
    { id: uuidv4(), task: 'make multi-step form', isCompleted: false },
  ];
  const { todos, addTodo, removeTodo, toggleComplete, editTodo } = useTodoState(initialTodos);

  // moved to useLocalStorageState
  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);
  ///////////
  // moved to useTodoState: all methods
  // const addTodo = newTask => {
  //   const newTodos = [...todos, { id: uuidv4(), task: newTask, isCompleted: false }];
  //   // call setTodos with new todos array
  //   setTodos(newTodos);
  // };

  // const removeTodo = id => {
  //   // new todos = filter out removed todo using its id
  //   // call setTodos with new todos array
  //   setTodos(todos.filter(t => t.id !== id));
  // };

  // const editTodo = (id, editedTask) => {
  //   const updatedTodos = todos.map(todo => {
  //     return todo.id === id ? { ...todo, task: editedTask } : todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  // const toggleComplete = id => {
  //   const updatedTodos = todos.map(todo => {
  //     return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
  //   });
  //   setTodos(updatedTodos);
  // };
  ///////////
  return (
    <div className='TodoApp'>
      <header>
        <h1>
          Things to do <span>Get things done, one item at a time</span>
        </h1>
      </header>
      <main>
        <TodoList
          todos={todos}
          onRemove={removeTodo}
          onEdit={editTodo}
          onToggleComplete={toggleComplete}
        />
        <AddTodoForm onAdd={addTodo} />
      </main>
    </div>
  );
};

export default TodoApp;
