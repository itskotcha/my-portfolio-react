// src/main.jsx - Add performance monitoring
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Performance measurement
if (process.env.NODE_ENV === 'production') {
  // Web Vitals measurement
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)