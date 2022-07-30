const Item = ({product}) => {
    return (
        //card
        <li>
            <div className="item_card">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </div> 
        </li>
    )
}

export default Item