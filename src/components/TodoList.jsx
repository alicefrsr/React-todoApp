import Todo from './Todo';
import { useContext } from 'react';
import { TodosContext } from '../context/todosContext';

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            isCompleted={todo.isCompleted}
            // {...todos}
            // onRemove={onRemove}
            // onEdit={onEdit}
            // onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    );
  return null;
};

export default TodoList;
