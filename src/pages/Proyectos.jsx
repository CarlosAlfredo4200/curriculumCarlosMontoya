import React from 'react'

const Proyectos = ({animarProyectos}) => {

  console.log(animarProyectos);
  return (
    <div className={`contenedor ${animarProyectos ? 'proyectoAnimar' : 'proyecto'} `}>
       
      <h1>Desde Proyectos</h1>   
      </div>
  )
}

export default Proyectos