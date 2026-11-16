export default function Fruit({name, id, deleteFruit}){
    //STATE

    //COMPORTEMENT 

    //AFFICHAGE
    return(
        <li key={id}>{name} <button onClick={() => deleteFruit(id)}>X</button></li>
    )
}
