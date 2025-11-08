import React, { useState, useEffect } from 'react'

export default function Admin(){
  const [books, setBooks] = useState([])
  const [form, setForm] = useState({ title:'', author:'', year:'', genre:'', isbn:'', description:'', cover:'', avail:'Disponible' })

  useEffect(()=> {
    const saved = localStorage.getItem('dq_books')
    if(saved) setBooks(JSON.parse(saved))
    else { setBooks([]) }
  },[])

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]:value}))
  }

  function addBook(e){
    e.preventDefault()
    const newBook = { id: Date.now(), title: form.title || 'Sin título', author: form.author || 'Anónimo', year: form.year || 'S/I', genre: form.genre || 'General', isbn: form.isbn, description: form.description, cover: form.cover, avail: form.avail }
    const next = [newBook, ...books]
    setBooks(next)
    localStorage.setItem('dq_books', JSON.stringify(next))
    setForm({ title:'', author:'', year:'', genre:'', isbn:'', description:'', cover:'', avail:'Disponible' })
    alert('Libro agregado (simulado).')
  }

  return (
    <div className="container">
      <h2>Panel de Administración</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:12,marginTop:12}}>
        <div className="card form-box">
          <h4>Agregar libro</h4>
          <form onSubmit={addBook}>
            <div className="form-grid">
              <input name="title" placeholder="Título" value={form.title} onChange={handleChange} />
              <input name="author" placeholder="Autor" value={form.author} onChange={handleChange} />
              <input name="year" placeholder="Año" value={form.year} onChange={handleChange} />
              <input name="genre" placeholder="Género" value={form.genre} onChange={handleChange} />
              <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} />
              <input name="cover" placeholder="URL portada (opcional)" value={form.cover} onChange={handleChange} />
              <textarea name="description" placeholder="Descripción" className="full" value={form.description} onChange={handleChange} />
              <select name="avail" value={form.avail} onChange={handleChange}>
                <option>Disponible</option>
                <option>Prestado</option>
              </select>
            </div>
            <div style={{marginTop:8}}>
              <button type="submit" className="btn">Agregar libro</button>
            </div>
          </form>
        </div>

        <div>
          <h4>Libros actuales</h4>
          <div style={{display:'grid',gap:8}}>
            {books.length === 0 ? <div className="card muted small">No hay libros agregados aún.</div> :
              books.map(b => <div key={b.id} className="card">{b.title} — <small className="muted">{b.author}</small></div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
