import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import HomePage from "./pages/home/Home";
import About from "./pages/about/About";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
