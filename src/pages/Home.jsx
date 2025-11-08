import React from 'react'
import BookCard from '../components/BookCard'

const SAMPLE = [
  { id:1, title:'Don Quijote de la Mancha', author:'Miguel de Cervantes', year:1605, genre:'Novela clásica', description:'Aventuras y reflexión sobre la lectura.', cover:'/assets/img/quijote.jpg' },
  { id:2, title:'1984', author:'George Orwell', year:1949, genre:'Distopía', description:'Vigilancia y control gubernamental.', cover:'/assets/img/1984.jpg' },
  { id:3, title:'Cien años de soledad', author:'Gabriel García Márquez', year:1967, genre:'Realismo mágico', description:'Saga de la familia Buendía en Macondo.', cover:'/assets/img/soledad.jpg' },
  { id:4, title:'El Principito', author:'Antoine de Saint-Exupéry', year:1943, genre:'Fábula', description:'Poética reflexión sobre la infancia y el amor.', cover:'/assets/img/principito.jpg' }
]

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <h2>Bienvenido a <span className="accent">El Quijote de Krypton</span></h2>
          <p>Explora nuestro catálogo, participa en eventos y únete a los clubes de lectura.</p>
        </div>
        <div className="hero-right card">
          <h4>Libro destacado</h4>
          <img src="/assets/img/quijote.jpg" alt="Don Quijote" style={{width:'100%',borderRadius:8}} onError={(e)=>e.target.src='/assets/img/placeholder.png'} />
          <p className="muted small">Don Quijote de la Mancha — Miguel de Cervantes</p>
          <a href="/libro/1" className="link">Ver detalle</a>
        </div>
      </section>

      <section style={{marginTop:18}}>
        <h3>Novedades y recomendaciones</h3>
        <div className="cards-grid" style={{marginTop:8}}>
          {SAMPLE.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      <section style={{marginTop:18}}>
        <h3>Servicios</h3>
        <div className="card">
          <ul>
            <li>Préstamo domiciliario y en sala</li>
            <li>Salas de estudio y coworking</li>
            <li>Clubes de lectura y talleres mensuales</li>
            <li>Acceso a recursos digitales</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
