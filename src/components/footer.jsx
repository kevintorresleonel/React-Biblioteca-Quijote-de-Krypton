import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container inner" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <p style={{margin:0}}>© 2025 Librería El Quijote de Krypton</p>
          <p className="muted small" style={{margin:0}}>Dirección ficticia · Tel: (000) 123-4567</p>
        </div>
        <div style={{display:'flex',gap:12}}>
          <a href="/contacto" className="muted link">Contacto</a>
          <a href="/sobre" className="muted link">Sobre</a>
        </div>
      </div>
    </footer>
  )
}
