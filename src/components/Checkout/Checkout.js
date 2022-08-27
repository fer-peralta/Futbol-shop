import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import { db } from "../../services/firebase"
import { addDoc, collection,updateDoc, doc, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const Checkout = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const {cart, getQuantity, getTotal, clearCart} = useContext(CartContext)
    const [firstName, setFirstName] = useState('')
    const [surName, setSurName] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')

    const navigate = useNavigate()

    const totalQuantity = getQuantity()
    const total = getTotal()
    
    const createOrder = async () => {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: {firstName},
                    lastName: {surName},
                    phone: {phone},
                    addres: {adress}
                },
                items: cart, //cart
                totalQuantity, //cart
                total, //cart
                date: new Date() //fecha de compra
            }
            
            const ids = cart.map(prod=> prod.id)
    
            const productsRef = collection(db, "products")
    
            const productsAddedFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            
            const {docs} = productsAddedFirestore
    
            const outOfStock = []
    
            const batch = writeBatch(db)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedCart?.quantity
    
                if (stockDb >= prodQuantity) {
                    //hay stock
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    //no hay stock
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                await batch.commit()
    
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`Muchas gracias por su compra ${firstName}. El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(()=>{
                    navigate("/")
                }, 3000)

            } else {
                console.warn("Hay productos que no tienen stock actualmente, verifique su compra")
            }
        }

        catch(error) {
            console.warn(error)
        }
        
        finally {
            setIsLoading(false)
        }

    }
    
    if(isLoading) {
        return <h1>Se está generando su orden</h1>
    }

    if(orderCreated){
        return <h1>La orden fue generada correctamente, será redirigido a la pagina principal en 3 segundos</h1>
    }

    return(
        <div className="checkout">
            <h1>Checkout</h1>
            <form>
                <label>Nombre</label><input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
                <label>Apellido</label><input value={surName} onChange={(e) => setSurName(e.target.value)} type="text"/>
                <label>Teléfono</label><input value={phone} onChange={(e) => setPhone(e.target.value)} type="number"/>
                <label>Dirección</label><input value={adress} onChange={(e) => setAdress(e.target.value)} type="text"/>
            </form>
            <button className="Option" onClick={createOrder}>Generar Orden</button>
        </div>
    )
    
}

export default Checkout