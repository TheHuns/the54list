import { GET_PEAKS, PEAKS_LOADING } from "../actions/types";

const initialState = {
  peaks: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PEAKS:
      return {
        ...state,
        peaks: action.payload,
        loading: false
      };

    case PEAKS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
