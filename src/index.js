import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.createRoot(root).render(app);
