import TodoItem from '../TodoItem';

import { type FC } from 'react';

type TodoListProps = {
  todo: {
    name: string;
    description: string;
    priority: string;
    id: number;
  }[];
  onDeleteTodo: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({ todo, onDeleteTodo }) => {
  return (
    <div>
      <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default TodoList;
