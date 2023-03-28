import './Todo.css';
// import { useState } from 'react';
import useToggle from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

const Todo = ({ id, task, isCompleted, onRemove, onEdit, onToggleComplete }) => {
  // const [isEditing, setIsEditing] = useState(false); replacing with useToggle hook
  const [isEditing, toggleIsEditing] = useToggle();

  const handleRemove = () => {
    onRemove(id);
  };

  const handleToggleComplete = () => {
    onToggleComplete(id);
  };

  return (
    <li>
      {isEditing ? (
        <div className='Todo'>
          <EditTodoForm
            id={id}
            onEdit={onEdit}
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
