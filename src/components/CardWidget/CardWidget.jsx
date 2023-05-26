import { useContext } from 'react'
import logo from '../../assets/bolsa-de-la-compra.png'
import './CardWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalCantidad } = useContext(CartContext)
    return (
        <Link to= '/cart' className='cardWidget'>
            <img className="cardWidgetLogo" src={logo} alt="LOGO" />
            <span className="text-dark">{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget