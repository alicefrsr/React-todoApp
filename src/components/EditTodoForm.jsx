import useInputState from '../hooks/useInputState';

const EditTodoForm = ({ id, onEdit, task, toggleIsEditing }) => {
  const [value, handleChangeEdit, reset] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(id, value);
    reset(); // resets field value
    toggleIsEditing();
  };

  return (
    <form
      className='Todo-edit-form'
      onSubmit={handleSubmit}>
      <input
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
