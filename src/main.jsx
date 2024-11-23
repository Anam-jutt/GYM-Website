import { createRoot } from 'react-dom/client';
import App from '../src/App'
import { Provider } from 'react-redux';
import { store } from './assets/Redux/Store';
import React from 'react';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
