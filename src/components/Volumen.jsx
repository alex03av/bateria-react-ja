import React, { useState, useEffect } from "react";

function Volumen({ vol00 }) {
  const [rango, setRango] = useState(0.5);

  useEffect(() => {
    vol00(rango);
  }, [rango]);
  const vol = (e) => setRango(e.target.value / 99);

  return (
    <input
      className="volumen"
      type="range"
      min={0}
      max={99}
      list="tickmarks"
      onChange={vol}
    />
  );
}

export default Volumen;
