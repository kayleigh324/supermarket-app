import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import App from './App';
import { store, persistor } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
);

reportWebVitals();

