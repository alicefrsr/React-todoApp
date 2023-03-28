import Todo from './Todo';

const TodoList = ({ todos, onRemove, onEdit, onToggleComplete }) => {
  if (todos.length)
    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
            onRemove={onRemove}
            onEdit={onEdit}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    );
  return null;
};

export default TodoList;
