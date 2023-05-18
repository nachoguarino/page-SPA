import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CartWidget from './components/CardWidget/CardWidget';
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom';
import { ItemListContainer } from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
/* import {CartContext} from './context/CartContext' */

function App() {



  return (
      
  <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path='/' element= { <ItemListContainer/> } />
    <Route path='/productos/:categoriaId' element= { <ItemListContainer/> } />
    <Route path='/detail/:itemId' element= { <ItemDetailContainer/> } />
    <Route path='*' element= { <Navigate to={"/"} /> } />
    </Routes>
  </BrowserRouter>

);

}

export default App
