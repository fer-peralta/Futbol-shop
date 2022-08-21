import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const {productId} = useParams()

    useEffect(() => {

        getDoc(doc(db, "products", productId)).then(response => {
            const data = response.data()
            const productAddapted = {id: response.id, ...data}
            setProduct(productAddapted) 
        })
    }, [productId])


    return (
        <div className="detail_container">
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer