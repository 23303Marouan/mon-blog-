cat > components/fruitform.jsx <<'EOF'
import { useState } from 'react';

export default function Fruitform({ addFruit }) {
  const [newFruit, setNewFruit] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newFruit.trim() === "") return;

    addFruit({ id: new Date().getTime(), name: newFruit.trim() });
    setNewFruit("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        type="text"
        placeholder="Ajoutez un fruit..."
      />

      <button type="submit">Ajouter +</button>
    </form>
  );
}
EOF
