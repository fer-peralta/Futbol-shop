import {Link} from "react-router-dom"

const Item = ({product}) => {
    return (
        //card
        <li>
            <div className="item_card">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="item_price_details">
                    <p>${product.price}</p>
                    <Link to={`/detail/${product.id}`} className="see_detail">Ver detalle</Link>
                </div>
            </div> 
        </li>
    )
}

export default Item