import React from "react";

import gastos from "../Img/gastos.png";
import arquitectura from "../Img/arquitectura.png";
import juegos from "../Img/juegos.png";

const TabContenido = ({ index }) => {
  const titulos = {
    1: "App de Gestión de gastos",
    2: "App de Consumo de API (freeGame)",
    3: "landing pages",
  };

  const parrafos = {
    1: {
      tecnologia: "Javascript-Rect",
      estilos: "CSS",
      descripcion:
        "Es una app para gestionar presupuestos. Permite ingresar una cantidad he ir adicionando cada gastos diaros permitiendo la visualización inmediata de de tus gastos y el monto disponible. ",
    },

    2: "Este programa responde a la política de Gobierno Nacional “Casa Digna, Vida Digna” una iniciativa que cuenta además con la participación del Ministerio de Vivienda y el Ministerio de Agricultura. Para este fin, el DPS aporta 325 mil de los 600 mil mejoramientos que hacen parte de esta política, que atenderá las necesidades básicas habitacionales de la población más vulnerable del país en zona rural y urbana.  ",

    3: "Cuando se habla de vivir en comunidad se entiende que un conjunto de personas vive en una misma estructura, bajo ciertas reglas de comportamiento social. Esta definición toma una forma más tangible en los residenciales donde diferentes parejas o familias conviven entre sí.",
  };

  const imagenes = {
    1: gastos,
    2: juegos,
    3: arquitectura,
  };

  const indexDefault = 1;

  const titulo = titulos[index] || indexDefault;
  const parrafo = parrafos[index] || indexDefault;
  const imagen = imagenes[index] || indexDefault;
  console.log(titulo);

  console.log();
  // console.log('valor del index desde tabcontenido :'+index);

  return (
    <div>
      <div className="contenedor-tabs">
       

        <div className="contentTab">

          <div className="tab-image">
            <img className="imagen" src={imagen} alt="imagen" />
          </div>

          <div className="descripcion-proyecto">
            <p className="tab-p">
              Tecnología : <span>{parrafo.tecnologia}</span>
            </p>
            <p className="tab-p">
              Estilos : <span>{parrafo.estilos}</span>
            </p>
            <p className="tab-p description">
              Descripción : <span>{parrafo.descripcion}</span>
            </p>

            <div>
              <button className="btn-enviar">Ver mas...</button>
           </div>
          </div>

       


        </div>
      </div>
    </div>
  );
};

export default TabContenido;
