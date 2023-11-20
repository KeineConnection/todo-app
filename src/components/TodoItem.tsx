import { type FC } from 'react';

type TodoItemProps = {
  todo: {
    name: string;
    description: string;
    priority: string;
    id: number;
  }[];
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  function handleDeleteTodo(id: number) {
    alert('Geht das' + id);
  }

  return (
    <>
      <ul>
        {todo.map((todo) => (
          <div className="todo-container">
            <span onClick={() => handleDeleteTodo(todo.id)}>
              X (Klicke hier zum löschen)
            </span>

            <h3>{todo.name}</h3>
            <p>{todo.description}</p>

            <p>{todo.priority === 'Hoch' && '🔴 HOCH'}</p>
            <p>{todo.priority === 'Mittel' && '🟡 MITTEL'}</p>
            <p>{todo.priority === 'Niedrig' && '🟢 NIEDRIG'}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default TodoItem;
