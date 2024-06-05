import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import i18next from 'i18next'
import { Translation, initReactI18next } from "react-i18next";
import es from "./i18n/Español/es.json"
import en from "./i18n/Ingles/en.json"


i18next.use(initReactI18next).init({
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
}); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
