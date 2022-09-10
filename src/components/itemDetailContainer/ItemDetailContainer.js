import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../services/firebase/firestore"

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