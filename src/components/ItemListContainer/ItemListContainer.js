import {useState, useEffect} from "react"
import {getProducts, getProductsByCategory} from "../../products"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState ([])

    const {categoryId} =useParams()

    useEffect(() => {

        const productLoad = categoryId ? getProductsByCategory : getProducts

        productLoad(categoryId).then(products =>{
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