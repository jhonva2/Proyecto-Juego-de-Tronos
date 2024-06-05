import React from 'react'
import './HeaderContainer.scss'
import { Link } from 'react-router-dom'
import logo from "../../Img/Icon-cast.svg"
import spain from "../../Img/spain.svg"
import uk from "../../Img/uk.svg"
import { useTranslation } from 'react-i18next'




export default function HeaderContainer() {

  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };

  traducir();


  return (
    <div className="HeaderContainer">
      <div className="headerC"> 
        <Link to="/" style={{height: 45}}>
          <img src={logo} alt="homepage" />
        </Link>
        <Link to="/">
          <img src={spain} onClick={() => traducir("es")} alt="homepage" />
        </Link> 
        <Link to="/">
          <img src={uk} onClick={() => traducir("en")} alt="homepage" />
        </Link>   
      </div>
    </div>
  );
}
