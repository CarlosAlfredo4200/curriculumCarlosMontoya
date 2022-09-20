import React from 'react'
 
import imgSvg from '../components/Img/1.svg'
const Inicio = ({animarInicio}) => {
  
  

  return (
    <div className= {`contenedor ${animarInicio ? 'inicioAnimar' : 'inicio'} `}>
   <h1>Desde Inicio</h1>  
   <img className='imgsvg' src={imgSvg} alt="2" /> 
  
      </div>
  )
}

export default Inicio