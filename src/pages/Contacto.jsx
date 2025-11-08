import React from 'react'

export default function Contacto(){
  function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    alert(`Gracias ${form.get('nombre')}. Mensaje recibido: "${form.get('mensaje')}"`)
    e.target.reset()
  }

  return (
    <div className="container">
      <h2>Contacto</h2>
      <div className="form-box" style={{marginTop:12}}>
        <form onSubmit={handleSubmit} data-form="contact">
          <label>Nombre:</label>
          <input name="nombre" required />
          <label>Correo:</label>
          <input name="correo" type="email" required />
          <label>Mensaje:</label>
          <textarea name="mensaje" rows="5" required />
          <div style={{marginTop:8}}>
            <button type="submit" className="btn">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
