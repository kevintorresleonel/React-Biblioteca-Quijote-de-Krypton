import React from 'react'

export default function Eventos(){
  const events = [
    { id:1, title:'Club de lectura: Cien años de soledad', date:'2025-11-20', time:'17:00', desc:'Encuentro para comentar la obra y compartir reflexiones.' },
    { id:2, title:'Taller de escritura creativa', date:'2025-12-10', time:'15:00', desc:'Sesión práctica de relatos cortos.' }
  ]
  return (
    <div className="container">
      <h2>Eventos y Actividades</h2>
      <div style={{display:'grid',gap:12,marginTop:12}}>
        {events.map(ev => (
          <article key={ev.id} className="card">
            <h4>{ev.title}</h4>
            <p className="muted small">{ev.date} · {ev.time}</p>
            <p>{ev.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
