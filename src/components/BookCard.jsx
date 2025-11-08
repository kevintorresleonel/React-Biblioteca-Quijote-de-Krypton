import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCard({ book }){
  const cover = book.cover || '/assets/img/placeholder.png'
  return (
    <article className="book-card">
      <div className="book-thumb"><img src={cover} alt={book.title} onError={(e)=>e.target.src='/assets/img/placeholder.png'} /></div>
      <div className="book-body">
        <h4 className="book-title">{book.title}</h4>
        <div className="book-meta">{book.author} · {book.year} · <span className="small muted">{book.genre}</span></div>
        <p className="muted small" style={{marginTop:6}}>{book.description?.slice(0,120)}{book.description && book.description.length>120 ? '...' : ''}</p>
        <div className="book-actions" style={{marginTop:8}}>
          <Link to={`/libro/${book.id}`} className="btn" style={{padding:'0.4rem 0.6rem'}}>Ver</Link>
        </div>
      </div>
    </article>
  )
}
