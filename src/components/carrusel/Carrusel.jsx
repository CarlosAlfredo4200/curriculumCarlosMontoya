import React from "react";
import ImageSlider from "./ImageSlider";

const Carrusel = () => {
    
  const slides = [
    { url: "https://i.pinimg.com/736x/a4/21/e7/a421e77c3a2899b30aa39643d221cc7a--cat-cat-kitty-cats.jpg", title: "Img 1" },
    { url: "https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Img 2" },
     
  ];

  const containerStyles = {
    width: "500px",
    height:"280px",
    margin: "0 auto"
  }


  return (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </>
  );
};

export default Carrusel;
