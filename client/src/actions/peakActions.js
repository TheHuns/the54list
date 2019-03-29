import axios from "axios";
import { GET_PEAKS, PEAKS_LOADING } from "./types";
import { returnErrors } from "./errorActions";

export const getPeaks = () => dispatch => {
  dispatch(setPeaksLoading());
  axios
    .get("/api/peaks")
    .then(res =>
      dispatch({
        type: GET_PEAKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setPeaksLoading = () => {
  return {
    type: PEAKS_LOADING
  };
};
