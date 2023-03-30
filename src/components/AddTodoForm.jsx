import './AddTodoForm.css';
import useInputState from '../hooks/useInputState';
import { useContext } from 'react';
import { TodosContext } from '../context/todosContext';

const AddTodoForm = () => {
  const [value, handleChangeInput, reset] = useInputState('');
  // const { addTodo } = useContext(TodosContext);
  const { dispatch } = useContext(TodosContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (value !== '') {
      // addTodo(value);
      dispatch({ type: 'ADD', task: value });
      reset();
    }
  };
  console.log('ADDTODO FORM RENDERING');
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
