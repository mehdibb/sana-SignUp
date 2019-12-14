import { GET_ADDRESSES } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_ADDRESSES:
      return {
        ...state,
        addresses: action.payload
      };
    default:
      return state;
  }
};
