import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from "../Cart Item/CartItem"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext)  

    const totalQuantity = getQuantity()
    const total = getTotal()

    if(totalQuantity === 0) {
        return (
            <div className="cartToRoot">
                <h1>No hay productos en el carrito</h1>
                <h2>Mira nuestros productos <Link to="/">acá</Link></h2>
            </div> 
        )
    }

    return (     
        <div className="cartContainer">
            <h1>Tu carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="clean_button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart