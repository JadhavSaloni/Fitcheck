// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import './index.css';
// import { StrictMode } from 'react'; // Make sure to import StrictMode

// ReactDOM(document.getElementById('App')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' path for React 18
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './Context/ShopContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for the app

root.render(
  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </ React.StrictMode>
);
