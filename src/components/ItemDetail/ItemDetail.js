import { useState, useContext } from "react"
import Counter from "../Counter/Counter"
import {Link} from "react-router-dom"
import CartContext from "../../context/CartContext"

const ItemDetail = ({id, name, img, price, description, stock}) => {

    const [quantity, setQuantity] = useState(0)
    const {addItem, getProductQuantity} = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        setQuantity(quantity)
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)

    }

    const productQuantity = getProductQuantity(id)

    return(

        <div className="item_detail_card_content">
            <div className="item_detail_card">
                <div className="img_item_detail">
                <img src={img} alt={name} />
                </div>     
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p className="price_detail">${price}</p>
                </div>
            </div>
            <div className="count_content">
                {
                    quantity === 0 ? (
                        <Counter onConfirm={handleOnAdd} stock={stock} initial={productQuantity}/>
                    ) : (
                        <Link className="end_shop" to="/cart">Finalizar compra</Link>
                    )
                }
            </div>
        </div>

    )

}

export default ItemDetail