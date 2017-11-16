import axios from "axios";
import { FETCH_USER } from "./types.js";

export const fetchUser = () => async dispatch => {
    // get the payload
    const res = await axios.get("/api/current_user")
    // and dispatch it
    dispatch({ type: FETCH_USER, payload: res.data });
  };
