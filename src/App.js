import {} from "react-router-dom";
import "./App.css";

import React from "react";
import CuerpoMovil from "./components/cuerpo/CuerpoMovil";
import Carrusel from "./components/carrusel/Carrusel";
import Practicas from "./components/practicas/Practicas";



function App() {
  return (
    <>
     
          <CuerpoMovil />
       <div className="base">
         <Practicas />
        <Carrusel />
       </div>
      

      
    </>
  );
}

export default App;
