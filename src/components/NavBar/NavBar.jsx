import './NavBar.css'
import CartWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <header className='header'>
            <div className='headerContainer'>

                <img src={'/imagenes/lwklogo.png'}  className="logo" alt="LOGO" />

                <nav className="navbar">
                    <Link><h3 className="navbarItem">Remeras</h3></Link>
                    <Link><h3 className="navbarItem">Hoodies</h3></Link>
                    <Link><h3 className='navbarItem'>Shorts</h3></Link>
                </nav>
                
                <CartWidget />
            </div>
        </header>
    )
}

