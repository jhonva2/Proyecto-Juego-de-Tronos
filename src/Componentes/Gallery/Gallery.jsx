import React, { useState, useEffect } from 'react';
import "./Gallery.scss";
import { Link } from 'react-router-dom';
import lupa from "../../Img/lupa.svg";

export default function Gallery({ list }) {
    const [listPersonajesFilter, setlistPersonajeFilter] = useState([]);
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        if (list && list?.length) {
            if (inputSearch && inputSearch !== '') {
                const filteredList = filterList(list, inputSearch);
                setlistPersonajeFilter(filteredList);
            } else {
                setlistPersonajeFilter(list);
            }
        }
    }, [list, inputSearch]);

    const filterList = (list, value) => {
        return list.filter(f => f.name.toUpperCase().includes(value.toUpperCase().trim()));
    };

    return (
        <div>
            <div className='buscador-personajes'>
                <img src={lupa} alt="Buscar" />
                <input type="text" placeholder="Buscar" onKeyUp={(e) => { setInputSearch(e.target.value) }} />
            </div>
            <div className='gale-class'>
                {listPersonajesFilter.map((character, index) => (
                    <div key={index} className='card'>
                        <img src={"http://localhost:3000" + character.image} alt={character.name} />
                        <Link className='card-Name' to={"/personajes/" + character.id}>
                            {character.name}                       
                        </Link>    
                    </div>
                ))}
            </div>
        </div>        
    );
}