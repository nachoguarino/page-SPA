import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from '../components/itemListContainer/itemListContainer'
import { NavBar } from '../components/NavBar/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import {RegisterScreen} from '../components/LoginScreen/RegisterScreen'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return 	(
        <BrowserRouter>
        {
            user.logged 
            ? <>
                <NavBar/>
    
                <Routes>
                    <Route path='/' element= { <ItemListContainer/> } />
                    <Route path='/productos/:categoriaId' element= { <ItemListContainer/> } />
                    <Route path='/detail/:itemId' element= { <ItemDetailContainer/> } />
                    <Route path='/cart' element={ <Cart/> }/>
                    <Route path='checkout' element={ <Checkout/> } />
                    <Route path='*' element= { <Navigate to={"/"} /> } />
                </Routes>
            </>
            : <Routes>
                <Route path='/login' element={<LoginScreen/>} />
                <Route path='/register' element={<RegisterScreen/>} />
                <Route path='*' element={ <Navigate to="/login"/>} />
            </Routes>
        }
        
        </BrowserRouter>

	)
}

export default AppRouter