import { Component, PureComponent } from 'react'
import logo from '../../assets/bolsa-de-la-compra.png'
import './CardWidget.css'

const CartWidget = () => {

    return (
        <div className='cardWidget'>
            <img className="cardWidgetLogo" src={logo} alt="LOGO" />
            <span className="carritoItems">0</span>
        </div>
    )
}

export default CartWidget