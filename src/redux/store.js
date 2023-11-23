import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';

const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('State after action:', store.getState());
  return result;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  //composeEnhancers(applyMiddleware(loggerMiddleware, thunk))
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
