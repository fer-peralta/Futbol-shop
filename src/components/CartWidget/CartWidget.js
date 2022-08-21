import cartIcon from "../../../src/images/CartWidget.jpg"
import { useContext} from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    const cartWidgetStyle = {
        opacity: quantity > 0 ? 1 : 0
    }

    return (
        <div style={cartWidgetStyle} className="cartWidget">
            <Link to="/cart" className="cart"><img className="cart_icon" src={cartIcon} alt="CartWidget"></img></Link>
            <span>{quantity}</span>
        </div>
    )
}

export default CartWidget