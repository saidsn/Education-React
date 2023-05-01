import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/App.scss';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './assets/helpers/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


