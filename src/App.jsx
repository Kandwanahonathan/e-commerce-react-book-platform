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
    <nav className="navbar bg-success navbar-dark navbar-expand-lg px-8">
      <a className="navbar-brand fw-bold text-warning" href="#">BookStore</a>
      <div className='navbar-nav ms-auto'>
      <NavLink to='/home' className="nav-link text-white mx-3">Home</NavLink>
      <NavLink to='/book' className="nav-link text-white mx-3"> Book-Visit</NavLink>
      </div>
    </nav>

    <Routes>
      <Route path="/home"  element={<Home/>}/>
      <Route path="/book" element={<Visit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
