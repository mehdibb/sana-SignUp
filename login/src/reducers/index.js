import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import addressesReducer from "./addressesReducer";

export default combineReducers({
  auth: authReducer,
  addresses: addressesReducer,
  form: formReducer
});
