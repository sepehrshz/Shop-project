import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const div = document.getElementById("root");
div.style.width = "100%";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);