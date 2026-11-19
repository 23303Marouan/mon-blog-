cd /Users/apple/mon-portfolio/frontend/src
cat > components/fruit.jsx <<'EOF'
export default function Fruit({ name, id, deleteFruit }) {
  return (
    <li>
      {name} <button onClick={() => deleteFruit(id)}>X</button>
    </li>
  );
}
EOF