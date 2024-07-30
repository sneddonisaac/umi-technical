// External
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// Components
import { Provider } from './components/globals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
