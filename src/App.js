import { } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

import React, { } from "react";
import CuerpoMovil from "./components/cuerpo/CuerpoMovil";

import Practicas from "./components/practicas/Practicas";



function App() {


  return (

    <>
      <Header />
      <CuerpoMovil />

      <Practicas />
    </>
  );
}

export default App;
