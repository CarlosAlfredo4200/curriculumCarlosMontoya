import React from "react";
import { BsMenuDown } from "react-icons/bs";
import { CgCodeSlash } from "react-icons/cg";

const Header = () => {
  return (
    <header>
      <div className="header ">
        <div className="logo">
           <CgCodeSlash className="icon-logo"/>
           <div className="nombreLogo">
            <h2>C M </h2>
            <p>Dev</p>

           </div>
           <div className="links">
             <a className="enlaces" href="experimentos">Experimentos</a>
             <a className="enlaces" href="Contact">Contacto</a>

           </div>
        </div>

        

        <div>
          <label className="icono-menu">

         
            <BsMenuDown />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
