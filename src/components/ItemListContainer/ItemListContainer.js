import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({ saludo }) => {

    const [products, setProducts] = useState ([])
    const {categoryId} =useParams()

    
    useEffect(() => {
        const collectionRef =! categoryId
            ? collection(db, "products")
            : query(collection(db, "products"), where("category", "==", categoryId))
        
        getDocs(collectionRef).then(response => {
            const productsAddapted = response.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAddapted)
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