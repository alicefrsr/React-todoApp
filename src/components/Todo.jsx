import './Todo.css';
import useToggle from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { useContext, memo } from 'react';
// import { TodosContext } from '../context/todosContext';
import { DispatchContext } from '../context/todosContext';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Todo = ({ id, task, isCompleted }) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggle();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE', id: id });
  };

  const handleToggleComplete = () => {
    dispatch({ type: 'TOGGLE_COMPLETE', id: id });
  };

  console.log('TODO RE-RENDER:', id);

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
              <FaPen />
            </button>
            <button
              aria-label={`delete ${task}`}
              onClick={handleRemove}>
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
export default memo(Todo);
