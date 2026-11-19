import { useState } from 'react';

import Tache from '../components/tache';
import Tacheform from '../components/tacheform';

export default function Taches() {
  const [taches, setTaches] = useState([
    { id: 1, name: 'pomme' },
    { id: 2, name: 'banane' },
    { id: 3, name: 'orange' }
  ]);

  const deleteTodo = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  const addTodo = (newTacheObject) => {
    setTaches([...taches, newTacheObject]);
  };

  return (
    <main className="container">
      <h1>Liste des taches</h1>

      <ul>
        {taches.map((todo) => (
          <Tache
            key={todo.id}
            name={todo.name}
            id={todo.id}
            deleteTache={deleteTodo}
          />
        ))}
      </ul>

      <Tacheform addTache={addTodo} />
    </main>
  );
}
