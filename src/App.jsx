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
    <nav className="navbar bg-primary navbar-dark navbar-expand-lg px-4">
      <div className='navbar-nav'>
      <NavLink to='/home' className="nav-link text-white mx-3">Home</NavLink>
      <NavLink to='/book' className="nav-link text-white mx-3"> Book-visit</NavLink>
      </div>
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
