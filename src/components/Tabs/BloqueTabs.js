import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import TabContenido from "./TabContenido";


const BloqueTabs = () => {

  const [valorIndex, setValorIndex] = useState(1)
  

  const handleIndex = (e) => {
    setValorIndex(e)
    console.log(valorIndex);
  };
    
  
   

  return (
    <div className="contenedor-titulos-tabs">
      <div className="titulos-tabs">
        <Tab handleIndex={handleIndex} index={1} titulo="App de Gestión de gastos"  />
        <Tab handleIndex={handleIndex} index={2} titulo="App de Consumo de API (freeGame)"  />
        <Tab handleIndex={handleIndex} index={3} titulo="landing pages"  />
        
      </div>

   
      <div className="mt-10 mx-5">
      <TabContenido  
         index={valorIndex} 
     
    />
      </div>
    </div>
  );
};

export default BloqueTabs;
