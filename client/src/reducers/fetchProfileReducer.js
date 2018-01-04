import { FETCH_PROFILE_DETAILS } from '../actions/types.js';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_PROFILE_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
