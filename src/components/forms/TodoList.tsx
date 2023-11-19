import TodoItem from "../TodoItem";

import { type FC } from "react";

type TodoListProps = {
  todo: {
    name: string;
    description: string;
  }[];
};

const TodoList: FC<TodoListProps> = ({ todo }) => {
  return (
    <div>
      <TodoItem todo={todo} />
    </div>
  );
};

export default TodoList;
