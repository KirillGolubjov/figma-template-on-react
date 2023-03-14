import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from './context';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>
);
