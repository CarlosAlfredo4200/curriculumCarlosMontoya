import {} from "react-router-dom";
import "./App.css";

import React from "react";
import CuerpoMovil from "./components/cuerpo/CuerpoMovil";

import Practicas from "./components/practicas/Practicas";
import ContainerCarrusel from "./components/carrusel/ContainerCarrusel";



function App() {
  return (
    <>
     
          <CuerpoMovil />
       <div className="base">
         <Practicas />
        <ContainerCarrusel />
       </div>
          <CuerpoMovil />
      

      
    </>
  );
}

export default App;
