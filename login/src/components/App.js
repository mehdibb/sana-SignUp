import React from "react";
import { Router, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Addresses from "../pages/Addresses/Addresses";
import history from "../pages/history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Route path="/" exact component={SignUp} />
          <Route path="/addresses" exact component={Addresses} />
        </div>
      </Router>
    </div>
  );
};

export default App;
