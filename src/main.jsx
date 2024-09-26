import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll();
const target = document.getElementById('root');


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
scroll.scrollTo(target);
