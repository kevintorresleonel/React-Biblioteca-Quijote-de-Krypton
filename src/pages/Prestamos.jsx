import React, { useEffect, useState } from 'react'

const DEFAULT = [
  { id:1, libro:'Rayuela', usuario:'María López', inicio:'2025-11-01', devolucion:'2025-11-15' },
  { id:2, libro:'1984', usuario:'Andrés Torres', inicio:'2025-10-20', devolucion:'2025-11-03' }
]

export default function Prestamos(){
  const [loans, setLoans] = useState([])

  useEffect(()=> {
    const saved = localStorage.getItem('dq_prestamos')
    if(saved) setLoans(JSON.parse(saved))
    else { localStorage.setItem('dq_prestamos', JSON.stringify(DEFAULT)); setLoans(DEFAULT) }
  },[])

  return (
    <div className="container">
      <h2>Préstamos Activos</h2>
      <div className="card" style={{marginTop:12}}>
        <table className="table">
          <thead>
            <tr><th>Libro</th><th>Usuario</th><th>Fecha préstamo</th><th>Devolución</th></tr>
          </thead>
          <tbody>
            {loans.map(l => (
              <tr key={l.id}>
                <td>{l.libro}</td>
                <td>{l.usuario}</td>
                <td>{l.inicio}</td>
                <td>{l.devolucion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
