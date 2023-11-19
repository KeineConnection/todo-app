import { type FC } from "react";

type TodoItemProps = {
  todo: {
    name: string;
    description: string;
  }[];
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <>
      <ul>
        {todo.map((todo) => (
          <li>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoItem;
