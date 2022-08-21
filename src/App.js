import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer saludo="¡Bienvenidos a la tienda!"/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer />} />       
              <Route path="/detail/:productId" element={<ItemDetailContainer />} />  
              <Route path='/cart' element={<Cart />}/>  
              <Route path='/checkout' />
              <Route path="*" element={<h1>404 ERROR página no encontrada</h1>} />         
          </Routes>  
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;