import {useState} from "react"

const Counter = ({stock, onAdd}) => {

    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <ul>
                <button onClick={decrement}>Disminuir</button>
                <button onClick={increment}>Aumentar</button>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </ul>
        </div>
    )
}

export default Counter