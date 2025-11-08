import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login(){
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    // validación básica
    if(!email || !password){ alert('Completa los campos'); return }
    // Simulación: guarda usuario (name extraído del email)
    const name = email.split('@')[0]
    login(email, name)
    alert('Inicio de sesión exitoso.')
    navigate('/')
  }

  return (
    <div className="container">
      <div className="auth-box">
        <h2>Iniciar Sesión</h2>
        <p className="muted small">Introduce tu correo y contraseña para acceder a tu cuenta.</p>
        <form onSubmit={handleSubmit} style={{marginTop:12,display:'grid',gap:8}}>
          <input type="email" placeholder="Correo electrónico" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
          <div style={{display:'flex',gap:8}}>
            <button type="submit" className="btn">Entrar</button>
            <button type="button" className="btn ghost" onClick={()=>{ setEmail(''); setPassword('') }}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
