import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'

function App() {


  return (
      <div>

      <NavBar/>
      <ItemListContainer hola={"Bienvenido!"}/>
    </div>
  );
}

export default App
