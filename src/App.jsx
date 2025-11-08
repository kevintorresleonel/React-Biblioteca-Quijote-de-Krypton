import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import DetalleLibro from './pages/DetalleLibro'
import Usuarios from './pages/Usuarios'
import Prestamos from './pages/Prestamos'
import Historial from './pages/Historial'
import Admin from './pages/Admin'
import Contacto from './pages/Contacto'
import Sobre from './pages/Sobre'
import Eventos from './pages/Eventos'
import Servicios from './pages/Servicios'
import Login from './pages/Login'
import Registro from './pages/Registro'

export default function App(){
  return (
    <>
      <Navbar />
      <main style={{minHeight:'70vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/libro/:id" element={<DetalleLibro />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/prestamos" element={<Prestamos />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
