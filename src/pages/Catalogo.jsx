import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

// Si quieres persistencia, se puede inicializar desde localStorage en el futuro.
const DEFAULT_BOOKS = [
  { id:1, title:'Don Quijote de la Mancha', author:'Miguel de Cervantes', year:1605, genre:'Novela clásica', description:'Clásico español de aventuras.', cover:'/assets/img/quijote.jpg', avail:'Disponible' },
  { id:2, title:'1984', author:'George Orwell', year:1949, genre:'Distopía', description:'Novela distópica sobre vigilancia.', cover:'/assets/img/1984.jpg', avail:'Prestado' },
  { id:3, title:'Cien años de soledad', author:'Gabriel García Márquez', year:1967, genre:'Realismo mágico', description:'Historia multigeneracional en Macondo.', cover:'/assets/img/soledad.jpg', avail:'Disponible' },
  { id:4, title:'El Principito', author:'Antoine de Saint-Exupéry', year:1943, genre:'Fábula', description:'Cuento poético sobre la infancia.', cover:'/assets/img/principito.jpg', avail:'Disponible' },
  { id:5, title:'Rayuela', author:'Julio Cortázar', year:1963, genre:'Novela experimental', description:'Obra de estructura libre y lectura alternativa.', cover:'/assets/img/rayuela.jpg', avail:'Prestado' }
]

export default function Catalogo(){
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('')
  const [avail, setAvail] = useState('')

  useEffect(()=> {
    // intenta cargar de localStorage
    const saved = localStorage.getItem('dq_books')
    if(saved) setBooks(JSON.parse(saved))
    else { setBooks(DEFAULT_BOOKS); localStorage.setItem('dq_books', JSON.stringify(DEFAULT_BOOKS)) }
  },[])

  const genres = Array.from(new Set(books.map(b => b.genre)))

  const filtered = books.filter(b=>{
    const text = (b.title + ' ' + b.author + ' ' + b.genre).toLowerCase()
    return (!query || text.includes(query.toLowerCase())) &&
           (!genre || b.genre === genre) &&
           (!avail || b.avail === avail)
  })

  return (
    <div className="container">
      <h2>Catálogo de Libros</h2>

      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
        <input placeholder="Buscar por título, autor o género..." value={query} onChange={e=>setQuery(e.target.value)} style={{flex:1,padding:8,borderRadius:8}} />
        <select value={genre} onChange={e=>setGenre(e.target.value)} style={{padding:8,borderRadius:8}}>
          <option value="">Todos los géneros</option>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select value={avail} onChange={e=>setAvail(e.target.value)} style={{padding:8,borderRadius:8}}>
          <option value="">Cualquier estado</option>
          <option value="Disponible">Disponible</option>
          <option value="Prestado">Prestado</option>
        </select>
      </div>

      <div className="cards-grid" style={{marginTop:12}}>
        {filtered.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    </div>
  )
}
