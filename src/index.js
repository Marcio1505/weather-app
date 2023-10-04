import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WheatherApp from './components/WeatherApp/WeatherApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WheatherApp/>
  </React.StrictMode>
);
reportWebVitals();
