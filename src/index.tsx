import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Page1 from './elements/Page1';
import Page2 from './elements/Page2';
import AuthProvider from './context/provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
