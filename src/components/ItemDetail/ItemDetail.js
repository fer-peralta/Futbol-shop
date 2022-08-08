const ItemDetail = ({id, name, img, price, description}) => {

    return(

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

    )

}

export default ItemDetail