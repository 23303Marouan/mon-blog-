import { useState, useEffect } from 'react';

import Fruit from '../components/fruit';
import Fruitform from '../components/fruitform';

import { getThemes, addTheme } from '../services/themeService';

export default function Fruits() {

  // =========================
  // GESTION DES FRUITS (local, non enregistré en base)
  // =========================

  const [fruits, setFruits] = useState([
    { id: 1, name: 'pomme' },
    { id: 2, name: 'banane' },
    { id: 3, name: 'orange' }
  ]);

  const deleteFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  const addFruit = (newFruitObject) => {
    setFruits([...fruits, newFruitObject]);
  };

  // =========================
  // GESTION DES THEMES (PostgreSQL)
  // =========================

  const [themes, setThemes] = useState([]);
  const [newTheme, setNewTheme] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getThemes()
      .then((data) => setThemes(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleAddTheme = async (e) => {
    e.preventDefault();

    if (!newTheme.trim()) return;

    try {
      const themeCreated = await addTheme(newTheme.trim());

      setThemes([...themes, themeCreated]);
      setNewTheme('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  // =========================
  // AFFICHAGE
  // =========================

  return (
    <main className="container">

      <h1>Liste de fruits</h1>

      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.id}
            name={fruit.name}
            id={fruit.id}
            deleteFruit={deleteFruit}
          />
        ))}
      </ul>

      <Fruitform addFruit={addFruit} />

      <hr />

      <h1>Mes thèmes</h1>

      <form onSubmit={handleAddTheme}>
        <input
          type="text"
          placeholder="Nom du thème"
          value={newTheme}
          onChange={(e) => setNewTheme(e.target.value)}
        />

        <button type="submit">Ajouter un thème</button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>{theme.title}</li>
        ))}
      </ul>

    </main>
  );
}
