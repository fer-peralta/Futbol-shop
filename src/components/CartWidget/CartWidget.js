import cartIcon from "../../../src/images/CartWidget.jpg"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className="cartWidget">
            <img className="cart_icon" src={cartIcon} alt="CartWidget"></img>
            <span>{quantity}</span>
        </div>
    )
}

export default CartWidget