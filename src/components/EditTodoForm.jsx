import useInputState from '../hooks/useInputState';
import { useContext } from 'react';
import { TodosContext } from '../context/todosContext';

const EditTodoForm = ({ id, task, toggleIsEditing }) => {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChangeEdit, reset] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleIsEditing();
  };

  return (
    <form
      className='Todo-edit-form'
      onSubmit={handleSubmit}>
      <label htmlFor='editedTask'></label>
      <input
        id='editedTask'
        type='text'
        value={value}
        name={value}
        onChange={handleChangeEdit}
      />
      <button type='submit'>Save changes</button>
    </form>
  );
};

export default EditTodoForm;
