import './NavBar.css'
import CartWidget from '../CardWidget/CardWidget'

export const NavBar = () => {

    return (
        <header className='header'>
            <div className='headerContainer'>

                <img src={'./public/lwklogo.png'}  className="logo" alt="LOGO" />

                <nav className="navbar">
                    <h3 className="navbarItem">Prendas</h3>
                    <h3 className="navbarItem">Nosotros</h3>
                    <h3 className='navbarItem'>Contacto</h3>
                </nav>
                
                <CartWidget />
            </div>
        </header>
    )
}

