import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import { Cart } from '../components/Cart/Cart'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/productos" element={<Products/>}/>
        <Route path="/ingreso" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/mi-carrito" element={<Cart/>}/>
        <Route path="*" element={<p>Path not resolved</p>} />
        
    </Routes>
  )
}

export default AppRoutes