import './scss/_app.scss';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Counter from "./components/Counter/Counter"

function App() {

  const handleOnAdd = (quantity) => {

    console.log(`la cantidad agregada al carrito es: ${quantity}`)

  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <ItemListContainer saludo="¡Bienvenidos a la tienda!"/>
        <Counter stock={10} onAdd={handleOnAdd}/>
      </main>  
    </div>
  );
}

export default App;