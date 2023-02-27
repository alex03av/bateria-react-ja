import { useState, useEffect } from "react";
import Songs from "../components/Songs";
import Volumen from "./Volumen";
import "../index.css";
import "./checkbox.css";
import Panel from "./Panel";
import Checkbox from "./Checkbox";
function Buton() {
  const [valoe, setValoe] = useState(null);
  const [activar, setActivar] = useState(null);
  const [encender, setEncender] = useState(false);
  const [range, setRange] = useState(null);
  const validar = /^\Q|[W]|\Z|\E|\A|[D]|\X|\C|[S]$/g;

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (validar.test(event.key.toUpperCase())) {
        setValoe(event.key.toUpperCase());
      }
    });

    setValoe(" ");
    return () => {
      document.addEventListener("keyup", () => setValoe(null));
    };
  }, [valoe]);

 
  const volumenes = v => setRange(v);
  const obtener = t => setValoe(t);
  const bank = x => setActivar(x);
  const active = y => setEncender(y);

  return (
    <div className="marco">
      <div className="container">
        <Checkbox
          className="Apagador"
          t="slider2"
          active={active}
          val="Power"
        />
        <Panel
          valor={valoe}
          action={activar}
          volumenRango={range}
          apagar={encender}
        />
       
        <div className="container__Grid">
          <Songs obtener={obtener} tecla="Q" />
          <Songs obtener={obtener} tecla="W" />
          <Songs obtener={obtener} tecla="E" />
          <Songs obtener={obtener} tecla="A" />
          <Songs obtener={obtener} tecla="S" />
          <Songs obtener={obtener} tecla="D" />
          <Songs obtener={obtener} tecla="Z" />
          <Songs obtener={obtener} tecla="X" />
          <Songs obtener={obtener} tecla="C" />
        </div>
        <Volumen vol00={volumenes} />
        <Checkbox className="Bank" t="slider" active={bank} val="Bank" />
      </div>
    </div>
  );
}

export default Buton;
