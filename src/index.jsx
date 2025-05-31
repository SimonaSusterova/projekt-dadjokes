import { createRoot } from 'react-dom/client';
import './global.css';
import React from 'react';
import { HomePage } from './pages/HomePage';


const root = createRoot(document.querySelector('#app'));

root.render(<HomePage />);