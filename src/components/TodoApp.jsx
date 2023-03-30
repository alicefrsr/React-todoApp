import useTodoState from '../hooks/useTodoState';

import './TodoApp.css';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { TodosProvider } from '../context/todosContext';

const TodoApp = () => {
  // const initialTodos = [
  //   { id: uuidv4(), task: 'finish this todo app', isCompleted: false },
  //   { id: uuidv4(), task: 'useContext, useReducer', isCompleted: true },
  //   { id: uuidv4(), task: 'make multi-step form', isCompleted: false },
  // ];
  // const { todos, addTodo, removeTodo, toggleComplete, editTodo } = useTodoState(initialTodos);

  return (
    <div className='TodoApp'>
      <header>
        <h1>
          Things to do <span>Get things done, one item at a time</span>
        </h1>
      </header>
      <main>
        <TodosProvider>
          <TodoList />
          <AddTodoForm />
        </TodosProvider>
      </main>
    </div>
  );
};

export default TodoApp;
