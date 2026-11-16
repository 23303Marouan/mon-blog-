// import { useState } from 'react'
// import './App.css'
// import Fruit from './Page/components/fruit';
// import Fruitform from './Page/components/fruitform';

// function App() {
//   //state(données dynamiques)
//   const [fruits, setFruits] = useState([
//     {id:1, name:'pomme'},
//     {id:2, name:'banane'},
//     {id:3, name:'orange'}]
//   );



//   //comportement
//     const deleteFruit = (id) => {
//     const newFruits = fruits.filter((fruit) => fruit.id !== id)
//     setFruits(newFruits)
//   };

//   const addFruit = (newFruitObject) => {
//   setFruits([...fruits, newFruitObject]);
// };



//   //affichage render
//   return (
//     <div>
//       <h1>LISTE DE FRUIT </h1>
//       <ul>
//         {fruits.map((fruit) => (
//           <Fruit key={fruit.id} name={fruit.name} id={fruit.id} deleteFruit={deleteFruit} />
//         ))}
//       </ul>
//       <Fruitform addFruit={addFruit} />
//     </div>
//   )
// }


// export default App

// //Gestion d formulaire 
// //1.Création du formulaire
// //2.Soumission du formulaire 
// //3.Colecte des données du formulaire
// //3.A documente 