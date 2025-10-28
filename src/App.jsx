import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './header/home'
import {BrowserRouter,NavLink,Route,Routes} from "react-router-dom"
import Visit from './header/book-visit'
function App() {
 
  return (
    <>
    
    <BrowserRouter>
    <nav>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/book'> Book-visit</NavLink>
    </nav>

    <Routes>
      <Route path="/home"  element={<Home/>}/>
      <Route path='/Book-visit' element={<Visit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
