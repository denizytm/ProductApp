import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import reportWebVitals from './reportWebVitals';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  /* redux toolkit yapısını uygulamaya Provider ilke ekledim ve store değerini app klasöründen oluşturduğum store olarak atadım */
  <Provider store={store} > 
    <App/>
  </Provider>
);

reportWebVitals();
