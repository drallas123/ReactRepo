import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Bienvenue from './components/bienvenue/Bienvenue';
import SimpleList from './components/simple-list/SimpleList';
import { nanoid } from 'nanoid';
import TableauProduit from './components/tableau/TableauProduit';

function App() {

  const pokemonNames = [
    { id : nanoid(), name : "Salameche", type : "Feu", level: 12},
    { id : nanoid(), name : "Carapuce", type : "Eau", level: 15},
    { id : nanoid(), name : "Bulbizarre", type : "Plante", level: 5}
  ]

  const tableauProduits = [
    { name : "Ordinateur", price : 600, promo : true},
    { name : "Ecran", price : 150, promo : false},
    { name : "Clavier", price : 30, promo : true}
  ]

  return (
    <div className="App">

      {/* <h1>Mon premier projet React</h1> */}

      {/* <Welcome></Welcome> */}

      {/* <Bienvenue ageVisible = {false}></Bienvenue> */}

      {/* <SimpleList pokemons={pokemonNames}></SimpleList> */}

      <TableauProduit produits={tableauProduits}></TableauProduit>

    </div>
  );
}

export default App;
