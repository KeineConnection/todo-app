import TodoItem from '../TodoItem';

import { type FC } from 'react';

type TodoListProps = {
  todo: {
    name: string;
    description: string;
    priority: string;
    id: number;
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
