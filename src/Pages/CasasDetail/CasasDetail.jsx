import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './CasasDetail.scss'
import { useTranslation } from 'react-i18next';
import back from "../../Img/volver.svg"



export default function CasasDetail() {

  const { id } = useParams();
  const [casa, setCasa] = useState({});

  useEffect(() => {
    const getCasa = async () => {
      
      const { data } = await axios("http://localhost:3000/houses/" + id);
     
      setCasa(data)

    };

    getCasa();
  }, []);

  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };

  traducir();

  return (  
    
    <div className='detalle-casa'>
      <div>
        <NavLink className="backBtn" to={"/casas"}><img src={back} />Volver</NavLink>
      </div>
      <div className='img-casa'>
        <img src={'http://localhost:3000' + casa.image} alt="Casa" />
        <h2>{casa.name}</h2>
      </div>
      <div className='inf-pd'>
        <div>
          <h2>SEDE</h2>
          <p>{casa.settlement}</p>
        </div>
        <div>
          <h2>REGION</h2>
          <p>{casa.region}</p>
        </div>
        <div>
          <h2>ALIANZAS</h2>
          <p>{casa.alliances}</p>
        </div>
        <div>
          <h2>RELIGIONES</h2>
          <p>{casa.religions}</p>
        </div>
        <div>
          <h2>FUNDACION</h2>
          <p>{casa.foundation}</p>
        </div>
      </div>
    </div>
  )
}
 
