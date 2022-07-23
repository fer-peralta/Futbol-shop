import './scss/_app.scss';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ItemListContainer saludo="¡Bienvenidos a la tienda!"/>
    </div>
  );
}

export default App;