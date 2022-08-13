import { useState, createContext } from "react"

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                }else {
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

    const removeItem = (id) => {
        const newArray = cart.filter(prod => prod.id !== id)
        setCart(newArray)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {

        let acc = 0
        cart.forEach(prod =>{
        acc += prod.quantity
        })

        return acc

    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, isInCart,removeItem, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    
    )

}

export default CartContext