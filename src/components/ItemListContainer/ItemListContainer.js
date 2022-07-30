import {useState, useEffect} from "react"
import {getProducts} from "../../products"

import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState ([])

    useEffect( () => {
         getProducts().then(products =>{
             setProducts(products)
         })
    }, [])

    return (
        <div className="itemListContainer">
            <h1>{saludo}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer