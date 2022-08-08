import cartIcon from "../../../src/images/CartWidget.jpg"

const CartWidget = () => {
    return (
        <div className="cartWidget">
            <img className="cart_icon" src={cartIcon} alt="CartWidget"></img>
            <span> 0</span>
        </div>
    )
}

export default CartWidget