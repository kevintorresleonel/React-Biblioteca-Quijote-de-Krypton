import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar(){
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="header">
      <div className="container inner" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:'0.8rem'}}>
          <img src="/logo.png" alt="Logo" className="logo" style={{width:52,height:52,borderRadius:8}} onError={(e)=>e.target.style.display='none'} />
          <div>
            <div className="site-title" style={{color:'white',fontWeight:700}}>El Quijote de Krypton</div>
            <div className="site-tag" style={{fontSize:12,color:'rgba(255,255,255,0.85)'}}>Biblioteca · Préstamo · Comunidad</div>
          </div>
        </div>

        <nav className="nav">
          <ul style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
            <li><NavLink to="/" end className={({isActive})=> isActive ? 'active' : ''} style={{color:'white'}}>Inicio</NavLink></li>
            <li><NavLink to="/catalogo" style={{color:'white'}}>Catálogo</NavLink></li>
            <li><NavLink to="/usuarios" style={{color:'white'}}>Usuarios</NavLink></li>
            <li><NavLink to="/prestamos" style={{color:'white'}}>Préstamos</NavLink></li>
            <li><NavLink to="/historial" style={{color:'white'}}>Historial</NavLink></li>
            <li><NavLink to="/admin" style={{color:'white'}}>Administración</NavLink></li>
            <li><NavLink to="/contacto" style={{color:'white'}}>Contacto</NavLink></li>
          </ul>
        </nav>

        <div className="auth-actions">
          {user ? (
            <>
              <span style={{color:'white',marginRight:8}}>Hola, {user.name}</span>
              <button className="btn" onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/login"><button className="btn">Iniciar sesión</button></Link>
              <Link to="/registro"><button className="btn ghost">Registrarse</button></Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
