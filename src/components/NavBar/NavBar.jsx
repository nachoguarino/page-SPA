import './NavBar.css'
import CartWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <header className='header'>
            <div className='headerContainer'>

                <Link to='/'><img src={'/imagenes/lwklogo.png'} className="logo" alt="LOGO"/></Link> 

                <nav className="navbar">
                    <Link to='/productos/remeras' className="navbarItem">Remeras</Link>
                    <Link to='/productos/hoodies' className="navbarItem">Hoodies</Link>
                    <Link to='/productos/shorts'  className='navbarItem'>Shorts</Link>
                </nav>
                
                <CartWidget />
            </div>
        </header>
    )
}

