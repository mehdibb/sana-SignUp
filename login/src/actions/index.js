import sana from "../apis/sanaSignUp";
import {
  SIGN_UP,
  SET_DIMENSIONS,
  ADD_MARKER,
  SET_BUTTON,
  GET_ADDRESSES
} from "./types";
import history from "../pages/history";

export const signUp = (formValues, marker) => async dispatch => {
  console.log(formValues);
  console.log(marker);
  dispatch({ type: SET_BUTTON, payload: "primary loading" });
  const response = await sana.post("/api/karfarmas/address", {
    region: 1,
    address: formValues.address,
    lat: marker.lat,
    lng: marker.lng,
    coordinate_mobile: formValues.mobile,
    coordinate_phone_number: formValues.phone_number,
    first_name: formValues.firstName,
    last_name: formValues.lastName,
    gender: formValues.gender
  });

  console.log(response.status);
  if (response.status === 201) {
    dispatch({ type: SET_BUTTON, payload: "positive" });
    history.push("/addresses");
  } else {
    dispatch({ type: SET_BUTTON, payload: "negative" });
  }

  dispatch({ type: SIGN_UP, payload: response });
};

export const getAddresses = () => async dispatch => {
  const response = await sana.get("/api/karfarmas/address");
  console.log(response);
  dispatch({ type: GET_ADDRESSES, payload: response });
};

export const setDimensions = winDimensions => {
  return {
    type: SET_DIMENSIONS,
    payload: winDimensions
  };
};

export const addMarker = (lat, lng) => {
  return {
    type: ADD_MARKER,
    payload: {
      lat: lat,
      lng: lng
    }
  };
};

export const setButton = status => {
  return {
    type: SET_BUTTON,
    payload: status
  };
};
