import React from 'react'

const Contactos = ({animarContacto}) => {
  return (
    <div className= {`contenedor ${animarContacto ? 'contactoAnimar' : 'contacto'} `}>
    <h1>  Desde Contactos</h1>
      </div>
  )
}

export default Contactos