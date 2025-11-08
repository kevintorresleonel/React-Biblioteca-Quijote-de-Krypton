import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function DetalleLibro(){
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const navigate = useNavigate()

  useEffect(()=> {
    const books = JSON.parse(localStorage.getItem('dq_books') || '[]')
    const b = books.find(x => String(x.id) === String(id))
    setBook(b)
  },[id])

  if(!book) return <div className="container"><div className="card"><h3>Libro no encontrado</h3><p>El libro seleccionado no existe.</p></div></div>

  return (
    <div className="container">
      <div className="card" style={{display:'flex',gap:16,alignItems:'flex-start',flexWrap:'wrap'}}>
        <div style={{minWidth:180}}><img src={book.cover || '/assets/img/placeholder.png'} alt={book.title} style={{width:180,height:260,objectFit:'cover',borderRadius:8}} onError={(e)=>e.target.src='/assets/img/placeholder.png'} /></div>
        <div style={{flex:1}}>
          <h2>{book.title}</h2>
          <p className="muted">{book.author} · {book.year}</p>
          <p><strong>Género:</strong> {book.genre}</p>
          <p><strong>ISBN:</strong> {book.isbn || 'N/A'}</p>
          <p>{book.description}</p>
          <p><span className="small muted">Estado: {book.avail || 'Disponible'}</span></p>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <button className="btn" onClick={()=> navigate('/catalogo')}>Volver al catálogo</button>
            <button className="btn ghost" onClick={()=> alert('Simulación: solicitar préstamo enviada.')}>Solicitar préstamo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
