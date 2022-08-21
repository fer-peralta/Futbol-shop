import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='CardCartItem'>
            <div className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">{name}</h2>
            </div>
            <div className='ContainerItemCartItem'>
                <p className="InfoCartItem">Cantidad: {quantity}</p>
                <p className="InfoCartItem">Precio x Unidad: ${price}</p>
            </div>           
            <div className='cartItemSubtotal'>
                 <p className="subtotal">Subtotal: ${price * quantity}</p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default CartItem