import { type FormEvent, type FC, useState } from 'react';

import { type Todo } from '../../App';

type NewTodoProps = {
  onAddTodo: (todo: Todo) => void;
};

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<string>('');

  const id = Math.random();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newTodo = {
      name,
      description,
      priority,
      id,
    };

    onAddTodo(newTodo);
  }

  return (
    <div>
      <form className="form-add-todo" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Hoch">Hoch</option>
          <option value="Mittel">Mittel</option>
          <option value="Niedrig">Niedrig</option>
        </select>

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTodo;
