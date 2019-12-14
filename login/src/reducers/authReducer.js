import {
  SIGN_UP,
  SET_DIMENSIONS,
  ADD_MARKER,
  SET_BUTTON
} from "../actions/types";

export default (state = { winDimensions: {}, status: "disabled" }, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        data: action.payload.data
      };
    case SET_DIMENSIONS:
      return {
        ...state,
        winDimensions: action.payload
      };
    case ADD_MARKER:
      return {
        ...state,
        marker: action.payload
      };
    case SET_BUTTON:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};
