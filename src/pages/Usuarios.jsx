import React, { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'

const DEFAULT_USERS = [
  { id:1, name:'María López', email:'maria@example.com', status:'Activo' },
  { id:2, name:'Juan Pérez', email:'juan@example.com', status:'Inactivo' },
  { id:3, name:'Ana Gómez', email:'ana@example.com', status:'Activo' }
]

export default function Usuarios(){
  const [users, setUsers] = useState([])

  useEffect(()=> {
    const saved = localStorage.getItem('dq_users')
    if(saved) setUsers(JSON.parse(saved))
    else { localStorage.setItem('dq_users', JSON.stringify(DEFAULT_USERS)); setUsers(DEFAULT_USERS) }
  },[])

  return (
    <div className="container">
      <h2>Gestión de Usuarios</h2>
      <div style={{display:'grid',gap:8,marginTop:12}}>
        {users.map(u => <UserCard key={u.id} user={u} />)}
      </div>

      <div style={{marginTop:18}} className="card">
        <h4>Registrar nuevo usuario (simulado)</h4>
        <p className="muted small">En un proyecto real este formulario enviaría los datos al backend.</p>
        <a href="/registro" className="btn" style={{marginTop:8}}>Registrar usuario</a>
      </div>
    </div>
  )
}
