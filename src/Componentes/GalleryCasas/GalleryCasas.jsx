import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./GalleryCasas.scss";
import lupa from "../../Img/lupa.svg";

export default function GalleryCasas({ listCasas }) {
    const [listCasasFilter, setlistCasasFilter] = useState([]);
    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        if (listCasas && listCasas?.length) {
            if (inputSearch && inputSearch !== "") {
                const list = filterList(listCasas, inputSearch)
                setlistCasasFilter(list);
            } else {
                setlistCasasFilter(listCasas);
            }
        }
    }, [listCasas, inputSearch]);

    const filterList = (list, value) => {
        return list.filter(f => f.name.toUpperCase().includes(value.toUpperCase().trim()))
    }

    return (
        <div>
             <div className='buscador-casas'>
                <img src={lupa} alt="Buscar" />
                <input type='text' placeholder="Buscar" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
            </div>
            <div className='gale-casas'>
                {listCasasFilter.map((casa, index) => 
                    <div key={index}> 
                        <Link className='name-casa' to={'/casas/' + casa.id}>
                            <div className='casa'>
                                <img src={"http://localhost:3000/" + casa.image} alt={casa.name} />
                            </div>
                            <h2>{casa.name}</h2>
                        </Link>
                    </div>
                )}
            </div>
        </div>       
    );
}


