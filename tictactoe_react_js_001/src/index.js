import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.querySelector("#virtual-dom")).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
