import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './assets/helpers/ScrollToTop';
import { JwtContext,ParseJwt } from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JwtContext.Provider value = {{ParseJwt}}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </JwtContext.Provider>
  </React.StrictMode>
);


