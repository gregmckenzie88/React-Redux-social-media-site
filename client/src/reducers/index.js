// THIS IS WHERE WE COMBINE ALL REDUCERS TO BE FED INTO ROOT LEVEL REDUX DATA LAYER

import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import fetchSearchResults from './fetchSearchResults.js';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  searchResults: fetchSearchResults,
});
