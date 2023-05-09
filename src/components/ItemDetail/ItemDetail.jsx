import { useState } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () =>{
        console.log({...item, cantidad })
    }
    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <h4><strong>Precio: ${item.precio * cantidad}</strong></h4>

            <ItemCounter
                stock= {item.stock}
                setCantidad={setCantidad}
                cantidad={cantidad}
            />
            <button onClick={handleAgregar} className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail