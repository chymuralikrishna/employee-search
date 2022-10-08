import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./css/main.css";
import reportWebVitals from './reportWebVitals';
import HeaderComponent from './components/header';
import ContentComponent from './components/content';
import FooterComponent from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderComponent></HeaderComponent>
    <ContentComponent></ContentComponent>
    <FooterComponent></FooterComponent>
  </React.StrictMode>
);

reportWebVitals();
