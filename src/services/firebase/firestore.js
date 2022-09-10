import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"
import { db } from "./index"

export const getProducts = (categoryId) => {
    const collectionRef =! categoryId
        ?collection(db, "products")
        : query(collection(db, "products"), where("category", "==", categoryId))
    
    return getDocs(collectionRef).then(response => {
        const productsAddapted = response.docs.map(doc =>{
            const data = doc.data()
            return {id: doc.id, ...data}
        })
        return(productsAddapted)
    }).catch(error =>{
        return error
    })
}

export const getProductsById = (productId) => {
    return getDoc(doc(db, "products", productId)).then(response => {
            const data = response.data()
            const productAddapted = {id: response.id, ...data}
            return (productAddapted) 
        })
}