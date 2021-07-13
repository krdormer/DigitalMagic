import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // For overall styling
import App from './components/App/App'; // Initial entry component 'App'
import reportWebVitals from './reportWebVitals'; // For measuring web vitals 

import { BrowserRouter } from 'react-router-dom' // For SPA routing features 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals(console.log);
