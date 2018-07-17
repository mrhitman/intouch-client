import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PersonalPage from "./components/PersonalPage";
import News from "./components/News";
import LoginForm from "./components/Login";

import reducer from "./reducers";

import "./styles/index.css";


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/personal_page" component={PersonalPage} />
        <Route path="/news" component={News} />
        <Route path="/login" component={LoginForm} />
        <Route path="" component={PersonalPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
