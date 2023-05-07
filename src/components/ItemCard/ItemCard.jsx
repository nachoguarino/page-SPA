import './ItemCard.css'
import { Link } from "react-router-dom"

const ItemCard = ({item}) => {

    return(
        <div className='col-3 m-2'>
        <h3>{item.nombre}</h3>
        <img className="img-ropa" src={item.img} alt={item.nombre}/>
        <p>{item.descripcion}</p>
        <p>Categoria: {item.categoria}</p>
        <h5><strong>Precio: ${item.precio}</strong></h5>
        <Link to={`/detail/${item.id}`} className='btn btn-dark'>Ver más</Link>
    </div>
    )
}
export default ItemCard