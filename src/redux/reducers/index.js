import basketReducer from './basketReducer'; // Add more imports as needed
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  basket: basketReducer,
  // Add more reducers as needed
});

export default rootReducer;
