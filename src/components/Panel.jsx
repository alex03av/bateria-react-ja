import React, { useEffect, useState } from "react";
import { songsList } from "./songList";

function Panel({ valor, action, volumenRango, apagar }) {
  const [bajos, setBajos] = useState([]);
  const [ligero, setLigero] = useState([]);
  const [title, setTitle] = useState(" ");
  useEffect(() => {
    setBajos(songsList[0].strong);
    setLigero(songsList[0].light);
  });
  useEffect(() => {
    if (action == null) {
      setTitle("");
    } else if (action == true) {
      setTitle("Smooth Piano Kit");
    } else if (action == false) {
      setTitle("Heater Kit");
    }
  }, [action]);

  useEffect(() => {
    setTitle("");
  }, [apagar]);

  const audios = (url) => {
    const audio = new Audio(url);
    audio.play();
    audio.volume = volumenRango;
  };

  useEffect(() => {
    if (volumenRango == 0.5) {
      setTitle("");
    } else {
      setTitle(`Vol ${Math.trunc(volumenRango * 100)}%`);
    }
    setTimeout(() => {
      setTitle("");
    }, 900);
  }, [volumenRango]);

  function ids(id) {
    if (apagar == false || apagar == null) {
      if (action == false || action == null) {
        setTitle(ligero[id].title);
        audios(ligero[id].sound);
      } else {
        setTitle(bajos[id].title);
        audios(bajos[id].sound);
      }
    } else {
      setTitle(" ");
    }
  }
  //console.log(ligero[0].id)
  useEffect(() => {
    switch (valor) {
      case "Q":
        ids(0);

        break;
      case "W":
        ids(1);
        break;

      case "E":
        ids(2);

        break;

      case "A":
        ids(3);
        break;

      case "S":
        ids(4);
        break;

      case "D":
        ids(5);
        break;

      case "Z":
        ids(6);
        break;

      case "X":
        ids(7);
        break;

      case "C":
        ids(8);
        break;
    }
  }, [valor]);

  return (
    <div>
      <div className="display">{title}</div>
    </div>
  );
}

export default Panel;
