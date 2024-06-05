import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import "./CronologiasPage.scss"
import circulos from "../../Img/tresC.svg"



export default function CronologiasPage() {

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");

      setCharacters(data);
    }
    getCharacters();
  }, []);

  characters.sort((a, b) => a.age - b.age);

return (
  <div>
    <div className='contenedor'>
      <div className='circulo'>
        <img src={circulos}alt="circulos"/>
      </div>
      <div className='db-barra'></div>
    </div>
    <div className='db-crono'>
      {characters.map((character, index) => (
        <div className={index % 2 === 0 ? "characters-cronologia-par" : "characters-cronologia-impar"} key={index}>
          <h3>{character.age}</h3>
          <h4>{character.name}</h4>
          <img src={"http://localhost:3000" + character.image} alt={character.name} />          
          <h4>{character.house}</h4>
        </div>
      ))}
    </div>
    <div className='db-barra'></div>
  </div>
)

}

