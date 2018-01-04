import { FETCH_SEARCH_RESULTS } from '../actions/types.js';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return action.payload;
    default:
      return state;
  }
}
