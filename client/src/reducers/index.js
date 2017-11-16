// THIS IS WHERE WE COMBINE ALL REDUCERS TO BE FED INTO ROOT LEVEL REDUX DATA LAYER

import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
