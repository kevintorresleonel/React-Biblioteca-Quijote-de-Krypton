import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Registro(){
  const { login } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    if(!name || !email || !password){ alert('Completa los campos'); return }
    // guardado simulado de usuario en localStorage
    const users = JSON.parse(localStorage.getItem('dq_users') || '[]')
    const newUser = { id: Date.now(), name, email, status:'Activo' }
    localStorage.setItem('dq_users', JSON.stringify([newUser, ...users]))
    login(email, name)
    alert('Registro exitoso. Bienvenido ' + name)
    navigate('/')
  }

  return (
    <div className="container">
      <div className="auth-box">
        <h2>Crear cuenta</h2>
        <p className="muted small">Regístrate para solicitar préstamos y guardar listas de lectura.</p>
        <form onSubmit={handleSubmit} style={{marginTop:12,display:'grid',gap:8}}>
          <input placeholder="Nombre completo" value={name} onChange={e=>setName(e.target.value)} />
          <input type="email" placeholder="Correo electrónico" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña (mín 6 caracteres)" value={password} onChange={e=>setPassword(e.target.value)} />
          <div style={{display:'flex',gap:8}}>
            <button type="submit" className="btn">Registrarse</button>
            <button type="button" className="btn ghost" onClick={()=>{ setName(''); setEmail(''); setPassword('') }}>Limpiar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
