import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Counter from "./components/Counter/Counter"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const handleOnAdd = (quantity) => {

    console.log(`la cantidad agregada al carrito es: ${quantity}`)

  }

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer saludo="¡Bienvenidos a la tienda!"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />} />       
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />  
            <Route path="*" element={<h1>404 ERROR página no encontrada</h1>} />         
        </Routes>  
            <Counter stock={10} onAdd={handleOnAdd}/>
      </BrowserRouter>
    </div>
  );
}

export default App;