import React from 'react'

export default function Historial(){
  const items = [
    { libro:'Don Quijote de la Mancha', fecha:'2025-10-20' },
    { libro:'Cien años de soledad', fecha:'2025-09-05' },
    { libro:'El Principito', fecha:'2025-08-01' }
  ]
  return (
    <div className="container">
      <h2>Historial de Préstamos</h2>
      <div className="card" style={{marginTop:12}}>
        <ul>
          {items.map((i, idx)=> <li key={idx}>{i.libro} — Devuelto el {i.fecha}</li>)}
        </ul>
      </div>
    </div>
  )
}
