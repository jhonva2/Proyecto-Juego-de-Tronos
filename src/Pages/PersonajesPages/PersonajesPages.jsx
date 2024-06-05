import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Gallery from '../../Componentes/Gallery/Gallery';

export default function PersonajesPages() {
  const [charactares, setCharaters] = useState([]);
  console.log(charactares); 

  useEffect(() => {
    const getCharaters = async () => {
      const { data } = await axios("http://localhost:3000/characters");

      setCharaters(data);
    };
    
    getCharaters();

  }, []);
  

  return (
    <div>
      <Gallery list={charactares} />
    </div>
  );
}
