import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {

    const {cart, emptyCart, totalCompra, removeItem} = useContext(CartContext)

    if(cart.lengh === 0){
        return(
            <div className="container my-5">
                <h2>Tu Carrito Esta Vacio!</h2>
                <hr />
                <Link to="/" className="btn btn-dark">Volver al Catalogo</Link>
            </div>
        )
    }

    return 	(	
        <div className="container my-5">
            <h2>Tu Compra</h2>
            <hr />

            {
                cart.map( (item) => (
                    <div key={item.id}>
                        <h3>{item.nombre} </h3>
                        <img src={item.img} alt={'foto'+item.nombre}/>
                        <p>Cantidad: {item.cantidad} </p>
                        <h3>SubTotal: {item.cantidad * item.precio} </h3>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt/></button>
                        <hr/>
                    </div>

                ))
            }
            <div>
                <h3>Precio Total: ${totalCompra()} </h3>
                <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
                <Link to="/checkout" className="btn btn-dark">Terminar su Compra</Link>
            </div>
        </div>
    )

}

export default Cart