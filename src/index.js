import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Rentals from "./Rentals";
import Customers from "./Customer";
import Login from "./Login";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
  


ReactDOM.render( <Router>
    <NavBar />
    <Switch>
      <Route path="/customers">
        <Customers />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/rentals">
        <Rentals />
      </Route>

      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>, document.getElementById("root"));
