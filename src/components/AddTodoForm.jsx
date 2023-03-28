import './AddTodoForm.css';
import { useState } from 'react';
import useInputState from '../hooks/useInputState';

const AddTodoForm = ({ onAdd }) => {
  // const [task, setTask] = useState(''); replacing with useInputState hook
  const [value, handleChangeInput, reset] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value !== '') {
      onAdd(value);
      reset();
    }
  };

  return (
    <div>
      <form
        className='AddTodoForm'
        onSubmit={handleSubmit}>
        <label
          htmlFor='task'
          aria-label='New task'></label>
        <input
          type='text'
          id='task'
          name='task'
          value={value}
          onChange={handleChangeInput}
          placeholder='New task'
        />
        <button aria-label='add a new task'>+</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
