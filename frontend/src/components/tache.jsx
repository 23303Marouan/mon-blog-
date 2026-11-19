export default function Tache({ name, id, deleteTache }) {
  return (
    <li>
      {name} <button onClick={() => deleteTache(id)}>X</button>
    </li>
  );
}
