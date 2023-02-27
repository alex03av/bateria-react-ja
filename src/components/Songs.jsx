import { useState, useEffect } from "react";
function Songs({ tecla,obtener }) {
  const [boton, setBoton] = useState('');

  useEffect(() => {
    setBoton(tecla);
    return () => {
     setBoton("")
    }
  }, [boton]);

   function buttonPres() {
    setBoton(tecla);
    obtener(boton);
   
  }

  return (
    <div>
      <button onClick={buttonPres} >{tecla}</button>
    </div>
  );
}

export default Songs;

