import axios from "axios";
import { FETCH_USER, FETCH_SEARCH_RESULTS } from "./types.js";

export const fetchUser = () => async dispatch => {
    // get the payload
    const res = await axios.get("/api/current_user")
    // and dispatch it
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile', values);

  dispatch({ type: FETCH_USER, payload: res.data });
  history.push('/');

};

export const fetchSearchResults = () => async dispatch => {
  const res = await axios.get("/api/search");
  dispatch({ type: FETCH_SEARCH_RESULTS, payload: res.data })
};

// export const fetchProfileDetails = (id) => async dispatch => {
//   const res = await axios.get("/api/profile/details", { params: { id: id } });
//   dispatch({ type: FETCH_PROFILE_DETAILS, payload: res.data })
// };
