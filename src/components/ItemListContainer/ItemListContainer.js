import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../services/firebase/firestore"


const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState ([])
    const {categoryId} =useParams()

    
    useEffect(() => {

        getProducts(categoryId).then(products =>{
            setProducts(products)
        })
                      
    }, [categoryId])

    return (
        <div className="itemListContainer">
            <h1>{saludo}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer