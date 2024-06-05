import axios from "axios";
import React, { useEffect, useState } from 'react'
import GalleryCasas from "../../Componentes/GalleryCasas/GalleryCasas"
import "./CasasPage"


export default function CasasPage() {

  const [casas, setCasas] = useState([]);

  useEffect(() => {
    const getCasas = async () => {
      const { data } = await axios("http://localhost:3000/houses");
      setCasas(data);
    }
    getCasas();
  }, []);
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="CasasP">
        <GalleryCasas listCasas={casas}/>
      </div>         
    </div>
  )
}
