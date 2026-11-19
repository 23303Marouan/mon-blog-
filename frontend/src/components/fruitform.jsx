
import { useState } from 'react';

export default function Fruitform({ addFruit }) {

  // STATE
  const [newFruit, setNewFruit] = useState("");

  // COMPORTEMENT
  const handlesubmit = (event) => {
    event.preventDefault();

    if (newFruit.trim() === "") return;

    const newFruitObject = {
      id: new Date().getTime(),
      name: newFruit.trim()
    };

    addFruit(newFruitObject);
    setNewFruit("");
  };

  const handleChange = (event) => {
    setNewFruit(event.target.value);
  };

  // AFFICHAGE
  return (
    <form onSubmit={handlesubmit}>
      <input
        value={newFruit}
        onChange={handleChange}
        type="text"
        id="fruitName"
        placeholder="Ajoutez un fruit..."
      />

      <button type="submit">Ajouter +</button>
    </form>
  );
}
