import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss";
import { useTranslation } from 'react-i18next';

export default function Header() {


  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };

  traducir();

    
    return (
      
        <header className="nav-container">
            <nav className='nav-link'>
                <NavLink to="personajes">{t("PERSONAJES") }</NavLink>
                <NavLink to="casas">{t("CASAS") }</NavLink>
                <NavLink to="cronologia">{t("CRONOLOGIAS") }</NavLink>
            </nav>
        </header>

    );
}
