import axios from "axios";

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
const proxyurl = "";

export default axios.create({
  baseURL: proxyurl + "http://stage.achareh.ir",
  headers: {
    "Content-Type": "application/json"
  },
  auth: {
    username: "09822222222",
    password: "sana1234"
  }
});
