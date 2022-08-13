import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { getProductsById } from "../../products"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.error(error)
            })

    }, [productId])


    return (
        <div className="detail_container">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer