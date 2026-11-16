
import { useState, useEffect } from 'react';
import './App.css';

import Fruit from "./Page/liste_fruit/components/fruit.jsx";
import Fruitform from "./Page/liste_fruit/components/fruitform.jsx";

import { getThemes, addTheme } from "./services/api.js";

export default function App() {

  // =========================
  // GESTION DES FRUITS
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
  // GESTION DES THEMES
  // =========================

  const [themes, setThemes] = useState([]);
  const [newTheme, setNewTheme] = useState('');
  const [error, setError] = useState('');

  // Récupérer les thèmes depuis PostgreSQL
  useEffect(() => {
    getThemes()
      .then((data) => setThemes(data))
      .catch((error) => setError(error.message));
  }, []);

  // Ajouter un thème dans PostgreSQL
  const handleAddTheme = async (e) => {
    e.preventDefault();

    if (!newTheme.trim()) return;

    try {
      const themeCreated = await addTheme(newTheme);

      setThemes([...themes, themeCreated]);
      setNewTheme('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };


  // =========================
  // AFFICHAGE
  // =========================

  return (
    <div>

      <h1>LISTE DE FRUITS</h1>

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

      <h1>MES THEMES</h1>

      <form onSubmit={handleAddTheme}>
        <input
          type="text"
          placeholder="Nom du thème"
          value={newTheme}
          onChange={(e) => setNewTheme(e.target.value)}
        />

        <button type="submit">
          Ajouter un thème
        </button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>
            {theme.title}
          </li>
        ))}
      </ul>

    </div>
  );
}


//Gestion d formulaire 
//1.Création du formulaire
//2.Soumission du formulaire 
//3.Colecte des données du formulaire
//3.A documente 