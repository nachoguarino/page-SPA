import './NavBar.css'
import CartWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export const NavBar = () => {
    const { user, logout} = useContext(AuthContext)

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
                <div className='user'>
                    <p>{user.email}</p>
                    <button className='btn btn-outline-dark' onClick={logout}>Cerrar sesion</button>
                </div>
            </div>
        </header>
    )
}

