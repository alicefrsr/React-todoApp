import './Todo.css';
import useToggle from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { useContext } from 'react';
import { TodosContext, TodosProvider } from '../context/todosContext';

const Todo = ({ id, task, isCompleted }) => {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggleIsEditing] = useToggle();

  const handleRemove = () => {
    // removeTodo(id);
    dispatch({ type: 'REMOVE', id: id });
  };

  const handleToggleComplete = () => {
    // toggleComplete(id);
    dispatch({ type: 'TOGGLE_COMPLETE', id: id });
  };

  return (
    <li>
      {isEditing ? (
        <div className='Todo'>
          <EditTodoForm
            id={id}
            task={task}
            toggleIsEditing={toggleIsEditing}
          />
        </div>
      ) : (
        <div className='Todo'>
          <input
            className='checkbox'
            type='checkbox'
            checked={isCompleted}
            onChange={handleToggleComplete}
          />
          <p
            aria-label={task}
            onClick={handleToggleComplete}
            className={isCompleted ? 'Todo-task completed' : 'Todo-task'}>
            {task}
          </p>
          <div className='Todo-buttons'>
            <button
              aria-label={`edit ${task}`}
              onClick={toggleIsEditing}>
              <i className='fas fa-pen'></i>
            </button>
            <button
              aria-label={`delete ${task}`}
              onClick={handleRemove}>
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
export default Todo;
