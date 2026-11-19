cat > pages/Fruits.jsx <<'EOF'
import { useState } from 'react';

import Fruit from '../components/fruit';
import Fruitform from '../components/fruitform';

export default function Fruits() {
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
    </main>
  );
}
EOF