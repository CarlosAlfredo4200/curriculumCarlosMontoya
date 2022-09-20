import { } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
// import Contactos from "./pages/Contactos";
// import Inicio from "./pages/Inicio";
// import Proyectos from "./pages/Proyectos";
import React, { } from "react";
import CuerpoMovil from "./components/cuerpo/CuerpoMovil";
import Proyectos from "./pages/Proyectos";
import Practicas from "./components/practicas/Practicas";
 


function App() {
  // const [animarInicio, setAnimarInicio] = useState(true);
  // const [animarProyectos, setAnimarProyectos] = useState(false);
  // const [animarContacto, setAnimarContacto] = useState(false);

 
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Header
    //       setAnimarProyectos={setAnimarProyectos}
    //       setAnimarInicio={setAnimarInicio}
    //       setAnimarContacto={setAnimarContacto}
    //     />
    //     <Routes>
    //       <Route
    //         index="/"
    //         element={
    //           <Inicio
    //             animarProyectos={animarProyectos}
    //             animarInicio={animarInicio}
    //             animarContacto={animarContacto}
    //           />
    //         }
    //       />
    //       <Route
    //         path="proyectos"
    //         element={
    //           <Proyectos
    //             animarProyectos={animarProyectos}
    //             animarInicio={animarInicio}
    //             animarContacto={animarContacto}
    //           />
    //         }
    //       />
    //       <Route
    //         path="contactos"
    //         element={
    //           <Contactos
    //             animarProyectos={animarProyectos}
    //             animarInicio={animarInicio}
    //             animarContacto={animarContacto}
    //           />
    //         }
    //       />
    //     </Routes>
    //   </div>

      
    // </BrowserRouter>
  <>
     <Header />
     <CuerpoMovil />
    
     <Practicas />
  </>
  );
}

export default App;
