import {useState, useEffect} from "react"

const Counter = ({stock = 0, initial = 1, onConfirm}) => {
    const [quantity, setQuantity] = useState(initial)

    useEffect(()=> {
        setQuantity(initial)
    }, [initial])

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counter">
            <ul>
                <button onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button onClick={increment}>+</button>
                <button className="add_product" onClick={() => onConfirm(quantity)}>Agregar producto</button>
            </ul>
        </div>
    )
}

export default Counter