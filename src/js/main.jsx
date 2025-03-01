import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let seconds = 0;
setInterval(() => {
  console.log(seconds);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home seconds = {seconds}/>
    </React.StrictMode>,
  )
  seconds = seconds + 1;
}, 1000);
