import { useState } from 'react';

import NewTodo from './components/forms/NewTodo';
import TodoList from './components/forms/TodoList';

export type Todo = {
  name: string;
  description: string;
  priority: string;
  id: number;
};

const todos = [
  {
    name: 'Make an todo app',
    description: 'Wir wollen eine Todo App in React bauen',
    priority: 'Hoch',
    id: Math.random(),
  },
];

const App = () => {
  const [t, sT] = useState(todos);

  function handleAddTodo(todo: Todo) {
    sT((todos) => [...todos, todo]);
  }

  return (
    <div>
      <h2>A todo app with React & TypeScript</h2>
      <hr />

      <NewTodo onAddTodo={handleAddTodo} />
      <hr />

      <TodoList todo={t} />
    </div>
  );
};

export default App;
