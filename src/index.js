import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { store } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <App />
         </PersistGate>
      </Provider>
   </React.StrictMode>
);
