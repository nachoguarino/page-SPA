import { useContext, useState } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const { cart, agregarAlCarrito, isInCart } = useContext (CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <h4><strong>Precio: ${item.precio}</strong></h4>
            <p>Subtotal: ${item.precio * cantidad}</p>

            {
                isInCart(item.id) ? <Link to="/cart" className="btn btn-dark m-1" >Terminar mi Compra</Link>
                : <ItemCounter
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    stock= {item.stock}
                    agregar={handleAgregar}
                />
            }
        </div>
    )
}

export default ItemDetail