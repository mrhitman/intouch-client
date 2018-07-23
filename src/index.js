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
import UpdateProfile from "./components/PersonalPage/Update";


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/update" component={UpdateProfile} />
        <Route path="/news" component={News} />
        <Route path="/:id" component={PersonalPage} />
        <Route path="/" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
