import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import './PersonajesDetail.scss'
import back from "../../Img/volver.svg" 

export default function PersonajesDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

    const [casa, setCasa] = useState([]);  

  useEffect(() => {
    const getCharacter = async () => {
      
      const { data } = await axios("http://localhost:3000/characters/" + id);
     
      setCharacter(data)
    };

    getCharacter();
  }, []);


    useEffect(() => {
    const getCasa = async () => {
      
      const { data } = await axios("http://localhost:3000/houses");
     
      setCasa(data)

    };

    getCasa();
  }, []);

  const findHouseByName = (houseName) => {
    return casa.find((casa) => casa.name === houseName) 
  }
  const casaPersonaje = findHouseByName(character.house)


  return (
    <div className='detalle-character'>
      <div>
        <NavLink className="backBtn" to={"/personajes"}><img src={back} />Volver</NavLink>
      </div>
      <div className='img-name'>
        <img src={'http://localhost:3000' + character.image} />
        <h2>{character.name}</h2>
      </div>
      <div className='inf-dp'>
        <div>
          <h2>CASA</h2>
          {casaPersonaje && (
            <img className="escudo"
            src={'http://localhost:3000' + casaPersonaje.image} />
          )}                    
        </div>
        <div>
          <h2>ALIANZAS</h2>
          {character.alliances && (
            <ul>
              {character.alliances.map((alianza, index) => (
                <li key={index}>{alianza}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>APARICIONES</h2>
          {character.episodes && (
            <ul>
              {character.episodes.map((apariciones, index) => (
                <li key={index}>{apariciones}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>PADRE</h2>
          {character.parents && (
            <ul>
              {character.parents.map((padres, index) => (
                <li key={index}>{padres}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>DESCENDIENTES</h2>
          {character.siblings && (
            <ul>
              {character.siblings.map((descendientes, index) => (
                <li key={index}>{descendientes}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2>TITULOS</h2>
          {character.titles && (
            <ul>
              {character.titles.map((titulos, index) => (
                <li key={index}>{titulos}</li>
              ))}
            </ul>
          )}
        </div>
        
      </div>
    </div>
  )
}
