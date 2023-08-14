import React from 'react'
import Header from '../header/Header'
import imagen from '../../components/../imagenes/dev.png';

const CuerpoMovil = () => {
  return (
    <div className='contenido-portada'>
      <div className="capa-gradiant">

        <div className="detalles">
          <Header />

          <div className="headerPersonal">
            <img className='header-img' src={imagen} alt="img 1" />

            <div className='info'>
              <div className='hi'>
                <span>Hi, I am </span>
                <h2 className='name'> Carlos Montoya</h2>
              </div>
              <p className='subTitle'>Vive tu creatividad, experimenta y da forma a nuevas ideas</p>
            </div>

          </div>


        </div>

      </div>
      <div>


      </div>
    </div>
  )
}

export default CuerpoMovil